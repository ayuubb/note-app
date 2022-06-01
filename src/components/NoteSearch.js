import React, { Component } from 'react';

export default class NoteSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.props.searchTitle(event.target.value);
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  render() {
    return (
      <div>
        <form>
          <div className="note__search">
            <input
              type="text"
              value={this.state.title}
              placeholder="cari catatan"
              onChange={this.onTitleChangeHandler}
            />
          </div>
        </form>
      </div>
    );
  }
}
