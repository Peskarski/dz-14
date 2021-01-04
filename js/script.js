import { DnD } from './dnd.js';
import { Note } from './note.js';

const addNoteEl = document.querySelector('.add-note');

const containerEl = document.querySelector('.container');
const note = new Note(containerEl);

addNoteEl.addEventListener('click', () => {
    const el = document.createElement('div');
    el.classList.add('block');
    note.designNote(el);
    note.addNote(el);
    note.render(containerEl);
    addDeleteHandler(el);
    addUpdateTextHandler(el);
    const dnd = new DnD(el);
});

function addDeleteHandler(element) {
    element.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-danger')) {
            note.deleteNote(element);
            note.render(containerEl);
        };
    });
}

function addUpdateTextHandler(element) {
    element.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-success')) {
            note.render(containerEl);
        }
    });
}






