import React from 'react';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
import NoteBody from './NoteBody';

export default function NoteItem(props) {
  const { title, body, createdAt, id, onDelete, onArchive, archived } = props;
  return (
    <div className="note__item">
      <NoteBody
        title={title}
        body={body}
        createdAt={createdAt}
        archived={archived}
      />
      <DeleteButton id={id} onDelete={onDelete} />
      <ArchiveButton id={id} onArchive={onArchive} />
    </div>
  );
}
