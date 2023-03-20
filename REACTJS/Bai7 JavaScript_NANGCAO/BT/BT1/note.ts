class Note {
    title: string;
    content: string;
    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }
    addNote(newTitle: string, newContent: string) {
        this.title = newTitle;
        this.content = newContent;
    }
}
class NoteList extends Note{
    notes: Note[];
    constructor(title: string, content: string) {
        super(title, content);
        this.notes = [];
    }
    addNoteToList(note: Note) {
        this.notes.push(note);
    }
    showNoteList() {
        for (let i = 0; i < this.notes.length; i++) {
            console.log(this.notes[i]);
        }
    }
}
let note1 = new Note("Note 1", "Content 1");
let note2 = new Note("Note 2", "Content 2");
let noteList = new NoteList("Note List", "Content List");
noteList.addNoteToList(note1);
noteList.addNoteToList(note2);
noteList.showNoteList();