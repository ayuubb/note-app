import React, { Component } from 'react';
import { getInitialData, show } from '../utils/data';
import NoteList from '../components/NoteList';
import NoteInput from '../components/NoteInput';

export default class NoteApps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: getInitialData(),
      archive: [],
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const data = this.state.data.filter((note) => note.id !== id);
    this.setState({ data });
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
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="container">
        <NoteInput addNote={this.onAddNoteHandler} />
        <h1>Note Active</h1>
        <NoteList items={this.state.data} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}
