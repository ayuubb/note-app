import React from 'react';

export default function ArchiveButton(props) {
  const { id, onArchive } = props;
  return (
    <button
      onClick={() => {
        onArchive(id);
      }}
    >
      ArchiveButton
    </button>
  );
}
