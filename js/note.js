export class Note {
    data = [];
    constructor(el) {
        this.el = el;
    }

    addNote(element) {
        const note = element;
        const obj = {
            note,
            text: note.childNodes[3].innerText
        }
        this.data.push(obj);
    }

    designNote(element) {
        element.innerHTML = `
        <div class="uppper-container">
        <button class="btn btn-danger btn-sm mb-4">X</button>
        </div>
        <p contenteditable="true" class="note-text">Note text</p>
        <div class="bottom-container">
        <button class="btn btn-success btn-sm mb-4">Change</button>
        </div>
        `;
    }

    render(parent) {
        parent.innerHTML = '';
        this.data.forEach((element, index) => {
            element.note.id = index;
            element.text = element.note.childNodes[3].innerText;
            parent.append(element.note);
        });
    }

    deleteNote(element) {
        this.data.splice(element.id, 1);
    }
    }
