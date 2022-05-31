import React from 'react';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
import NoteBody from './NoteBody';

export default function NoteItem(props) {
  const { title, body, createdAt, id, onDelete } = props;
  return (
    <div>
      <NoteBody title={title} body={body} createdAt={createdAt} />
      <DeleteButton id={id} onDelete={onDelete} />
      <ArchiveButton />
    </div>
  );
}
