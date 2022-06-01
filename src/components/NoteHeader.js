import React from 'react';
import { showFormattedDate } from '../utils/data';

export default function NoteHeader(props) {
  const { title, createdAt } = props;
  return (
    <div>
      <h3 className="note__body-title">{title}</h3>
      <p className="note__body-date">{showFormattedDate(createdAt)} </p>
    </div>
  );
}
