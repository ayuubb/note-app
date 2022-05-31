import React from 'react';

export default function NoteBody(props) {
  const { title, body, createdAt } = props;
  return (
    <div className="note__body">
      <div className="note__body-item">
        <h3 className="note__body-title">{title}</h3>
        <p className="note__body-date">Created at {createdAt}</p>
        <p className="note__body-description">{body}</p>
      </div>
    </div>
  );
}
