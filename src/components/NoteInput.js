import React, { Component } from 'react';

export default class NoteInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitHandeler = this.onSubmitHandeler.bind(this);
    this.handleLimitTitle = this.handleLimitTitle.bind(this);
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

  handleLimitTitle(event) {
    const inputTitle = event.target.value;
    let title = '';

    if (inputTitle.length > 40) {
      title = inputTitle.substring(0, 40);
    } else {
      title = inputTitle;
    }

    this.setState(() => {
      return {
        title: title,
      };
    });
  }
  render() {
    return (
      <div>
        <form className="note__input" onSubmit={this.onSubmitHandeler}>
          <p className="word">sisa kata {this.state.title.length}/40</p>
          <input
            className="input-area"
            type="text"
            placeholder="title"
            value={this.state.title}
            onChange={this.handleLimitTitle}
            required
          />
          <input
            className="input-area"
            type="text"
            placeholder="description"
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
            required
          />
          <button className="note__input-btn" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}
