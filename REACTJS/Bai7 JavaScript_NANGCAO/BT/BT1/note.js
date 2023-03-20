var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Note = /** @class */ (function () {
    function Note(title, content) {
        this.title = title;
        this.content = content;
    }
    Note.prototype.addNote = function (newTitle, newContent) {
        this.title = newTitle;
        this.content = newContent;
    };
    return Note;
}());
var NoteList = /** @class */ (function (_super) {
    __extends(NoteList, _super);
    function NoteList(title, content) {
        var _this = _super.call(this, title, content) || this;
        _this.notes = [];
        return _this;
    }
    NoteList.prototype.addNoteToList = function (note) {
        this.notes.push(note);
    };
    NoteList.prototype.showNoteList = function () {
        for (var i = 0; i < this.notes.length; i++) {
            console.log(this.notes[i]);
        }
    };
    return NoteList;
}(Note));
var note1 = new Note("Note 1", "Content 1");
var note2 = new Note("Note 2", "Content 2");
console.log(note1);
console.log(note2);
var noteList = new NoteList("Note List", "Content List");
noteList.addNoteToList(note1);
noteList.addNoteToList(note2);
noteList.showNoteList();
