import React, { Component } from 'react';
import { getInitialData, showFormattedDate } from '../utils/data';
import NoteList from '../components/NoteList';
import NoteInput from '../components/NoteInput';
import NoteSearch from '../components/NoteSearch';

export default class NoteApps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
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
            createdAt: showFormattedDate(+new Date()),
            archived: false,
          },
        ],
      };
    });
  }

  onSearchHandler(query) {
    const data = this.state.data.filter((item) => {
      item.title && item.title.toLocaleLowerCase().includes(query.toLowerCase);
    });
    this.setState({
      data: data,
    });
  }

  render() {
    return (
      <div className="container">
        <NoteInput addNote={this.onAddNoteHandler} />
        {/* <NoteSearch searchTitle={this.onSearchHandler} /> */}
        <h1>Note Active</h1>
        <NoteList
          items={this.state.data.filter((item) => !item.archived)}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
        <h1>Note Archive</h1>
        <NoteList
          items={this.state.data.filter((item) => item.archived)}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
      </div>
    );
  }
}
