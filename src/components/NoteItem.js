import React from 'react';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
import NoteBody from './NoteBody';
import NoteHeader from './NoteHeader';

export default function NoteItem(props) {
  const { title, body, createdAt, id, onDelete, onArchive, archived } = props;
  return (
    <div className="note__item">
      <div className="note__body-header">
        <NoteHeader title={title} createdAt={createdAt} />
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
      <NoteBody body={body} archived={archived} />
      <div className="note__item-action">
        <ArchiveButton id={id} onArchive={onArchive} archived={archived} />
      </div>
    </div>
  );
}
