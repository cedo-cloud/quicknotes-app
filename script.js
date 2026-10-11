// Select elements
const noteForm = document.querySelector('#note-form');
const noteInput = document.querySelector('#note-input');
const noteCategory = document.querySelector('#note-category');
const notesList = document.querySelector('#notes-list');
const noteCount = document.querySelector('#note-count');
const errorMessage = document.querySelector('#error-message');
const searchInput = document.querySelector('#search-input');
const clearAllBtn = document.querySelector('#clear-all-btn');

// State
let notes = [];



// Render the notes list
function render() {
    // Clear current list
    notesList.innerHTML = '';

    

    // Update count (always based on total notes, not filtered)
    if (notes.length === 0) {
        noteCount.textContent = "You have no notes yet.";
    } else if (notes.length === 1) {
        noteCount.textContent = "You have 1 note.";
    } else {
        noteCount.textContent = `You have ${notes.length} notes.`;
    }


    // Render each note
    filteredNotes.forEach(note => {
        const li = document.createElement('li');
        li.classList.add('note-card', `category-${note.category}`);

        const textP = document.createElement('p');
        textP.classList.add('note-text');
        textP.textContent = note.text; // Using textContent for safety

        const metaDiv = document.createElement('div');
        metaDiv.classList.add('note-meta');

        const catSpan = document.createElement('span');
        catSpan.classList.add('note-category');
        catSpan.textContent = note.category;

        const dateSpan = document.createElement('span');
        dateSpan.classList.add('note-date');
        dateSpan.textContent = note.createdAt;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.dataset.id = note.id;

        metaDiv.appendChild(catSpan);
        metaDiv.appendChild(dateSpan);
        metaDiv.appendChild(deleteBtn);

        li.appendChild(textP);
        li.appendChild(metaDiv);
        notesList.appendChild(li);
    });
}

// Add a note
function addNote(e) {
    e.preventDefault();
    
    const text = noteInput.value.trim();
    const category = noteCategory.value;

    

    // Create note object
    const newNote = {
        id: Date.now().toString(),
        text: text,
        category: category,
        createdAt: new Date().toLocaleString()
    };

    // Add to array, save, and reset form
    notes.unshift(newNote);
    saveNotes();
    noteInput.value = '';
    render();
}

// Delete a note
function deleteNote(id) {
    notes = notes.filter(note => note.id !== id);
    saveNotes();
    render();
}



// Event Listeners
noteForm.addEventListener('submit', addNote);

searchInput.addEventListener('input', render);

clearAllBtn.addEventListener('click', clearAllNotes);

// Event delegation for delete buttons
notesList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const id = e.target.dataset.id;
        deleteNote(id);
    }
});

// Initialize app
loadNotes();
render();