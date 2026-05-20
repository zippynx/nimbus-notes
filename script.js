let notes = JSON.parse(localStorage.getItem('nimbus-notes') || '[]');
let activeTag = 'idea';
let activeFilter = 'all';

function updateClock() {
  const now = new Date();
  const t = now.toLocaleTimeString('en-US', { hour12: false });
  const d = now.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
  document.getElementById('clock').textContent = t;
  document.getElementById('date').textContent = d;
}
updateClock();
setInterval(updateClock, 1000);

document.querySelectorAll('.tag-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeTag = btn.dataset.tag;
  });
});

document.getElementById('note-body').addEventListener('input', function () {
  document.getElementById('char-counter').textContent = this.value.length;
});

document.querySelectorAll('.filter-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeFilter = tab.dataset.filter;
    renderNotes();
  });
});

document.getElementById('search').addEventListener('input', renderNotes);
document.getElementById('btn-save').addEventListener('click', saveNote);
document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') saveNote();
});

function saveNote() {
  const title = document.getElementById('note-title').value.trim();
  const body  = document.getElementById('note-body').value.trim();

  if (!title && !body) {
    showToast('⚠ Write something first!');
    return;
  }

  const note = {
    id: Date.now().toString(),
    title: title || 'Untitled',
    body,
    tag: activeTag,
    ts: new Date().toISOString()
  };

  notes.unshift(note);
  save();
  renderNotes();
  updateStats();
  showToast('Note saved');

  document.getElementById('note-title').value = '';
  document.getElementById('note-body').value = '';
  document.getElementById('char-counter').textContent = '0';
}

function renderNotes() {
  const q = document.getElementById('search').value.toLowerCase();
  const grid = document.getElementById('notes-grid');

  const filtered = notes.filter(n => {
    const matchFilter = activeFilter === 'all' || n.tag === activeFilter;
    const matchSearch = !q || n.title.toLowerCase().includes(q) || n.body.toLowerCase().includes(q);
    return matchFilter && matchSearch;
  });

  document.getElementById('notes-label').textContent =
    filtered.length ? `${filtered.length} note${filtered.length !== 1 ? 's' : ''}` : 'No notes';

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>No notes yet</h3>
        <p>Your thoughts are waiting in the cloud.</p>
      </div>`;
    return;
  }

  const tagLabels = {
    idea: 'Idea',
    task: 'Task',
    ref: 'Reference',
    note: 'Note'
  };

  grid.innerHTML = filtered.map(n => {
    const dt = new Date(n.ts);
    const timeStr = dt.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
                  + ' · ' + dt.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const preview = n.body.length > 120 ? n.body.slice(0, 120) + '…' : n.body;

    return `
      <div class="note-card" data-id="${n.id}" data-tag="${n.tag}">
        <div class="note-header">
          <div class="note-title">${escHtml(n.title)}</div>
          <div class="note-tag ${n.tag}">${tagLabels[n.tag] || n.tag}</div>
        </div>
        ${preview ? `<div class="note-body">${escHtml(preview)}</div>` : ''}
        <div class="note-footer">
          <span class="note-time">${timeStr}</span>
          <div class="note-actions">
            <button class="action-btn delete" onclick="deleteNote('${n.id}')" title="Delete">🗑</button>
          </div>
        </div>
      </div>`;
  }).join('');
}

function deleteNote(id) {
  notes = notes.filter(n => n.id !== id);
  save();
  renderNotes();
  updateStats();
  showToast('Note removed');
}

function updateStats() {
  const today = new Date().toDateString();
  const todayNotes = notes.filter(n => new Date(n.ts).toDateString() === today);
  const totalChars = notes.reduce((acc, n) => acc + n.title.length + n.body.length, 0);
  document.getElementById('stat-total').textContent = notes.length;
  document.getElementById('stat-today').textContent = todayNotes.length;
  document.getElementById('stat-chars').textContent = totalChars.toLocaleString();
}

function save() {
  localStorage.setItem('nimbus-notes', JSON.stringify(notes));
}

function escHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}

renderNotes();
updateStats();