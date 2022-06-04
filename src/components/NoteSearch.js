import React, { Component } from 'react';
import autoBindReact from 'auto-bind/react';

export default class NoteSearch extends Component {
  constructor(props) {
    super(props);
    autoBindReact(this);
  }

  onSearchHandler(event) {
    this.props.onSearchingHandler(event.target.value);
  }

  render() {
    return (
      <div>
        <form>
          <div className="note__search">
            <input
              className="input-area"
              type="text"
              placeholder="search"
              onChange={this.onSearchHandler}
            />
          </div>
        </form>
      </div>
    );
  }
}
