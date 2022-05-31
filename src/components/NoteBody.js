import React from 'react';

export default function NoteBody(props) {
  const { title, body, createdAt } = props;
  return (
    <div className="note__body">
      <div className="note__body-item">
        <h2 className="note__body-title">{title}</h2>
        <p className="note__body-date">Created at {createdAt}</p>
        <p className="note__body-description">{body}</p>
      </div>
    </div>
  );
}
