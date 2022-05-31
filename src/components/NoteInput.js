import React, { Component } from 'react';

export default class NoteInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitHandeler = this.onSubmitHandeler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  }
  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onSubmitHandeler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState(() => {
      return {
        title: '',
        body: '',
      };
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandeler}>
          <input
            type="text"
            placeholder="title"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <input
            type="text"
            placeholder="description"
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          />
          <button type="submit">Tambah</button>
        </form>
      </div>
    );
  }
}
