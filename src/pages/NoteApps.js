import React, { Component } from 'react';
import { getInitialData } from '../utils/data';
import NoteList from '../components/NoteList';
import NoteInput from '../components/NoteInput';

export default class NoteApps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.activeNote = this.activeNote.bind(this);
    this.activedNote = this.activedNote.bind(this);
  }

  activeNote() {
    this.state.data.filter((note) => !note.archived);
  }
  activedNote() {
    this.state.data.filter((note) => note.archived);
  }

  onDeleteHandler(id) {
    const data = this.state.data.filter((note) => note.id !== id);
    this.setState({ data });
  }

  onArchiveHandler(id) {
    console.log('cek', id);
    this.state.data.map((item) => {
      if (item.id === id) {
        item.archived = !item.archived;
        console.log(item.id, item.archived);
        console.log(this.state.data);
        this.setState((prevState) => {
          return {
            data: [...prevState.data],
          };
        });
      }
    });
  }
  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        data: [
          ...prevState.data,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toLocaleString(),
            archived: false,
          },
        ],
      };
    });
    console.log(this.state.data);
  }

  render() {
    return (
      <div className="container">
        <NoteInput addNote={this.onAddNoteHandler} />
        <h1>Note Active</h1>
        <NoteList
          items={this.activedNote}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
        <h1>Note Archive</h1>
        <NoteList
          items={this.activeNote}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
      </div>
    );
  }
}
