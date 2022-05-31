import React from 'react';
import NoteItem from './NoteItem';

export default function NoteList(props) {
  const { items, onDelete } = props;

  if (items.length > 0) {
    return (
      <div className="note__list grid">
        {items.map((item) => (
          <NoteItem key={item.id} id={item.id} onDelete={onDelete} {...item} />
        ))}
      </div>
    );
  } else {
    return <h1>catatan tidak tersedia</h1>;
  }
}

// import React, { Component } from 'react';
// import NoteBody from './NoteBody';
// import { Colors } from '../utils/colors';

// export default class NoteList extends Component {
//   //   constructor(props) {
//   //     super(props);

//   //     this.state = {
//   //       color: '',
//   //     };
//   //   }

//   state = {
//     bgColor: Colors,
//   };
//   componentDidMount() {
//     this.getRandomColors();
//   }

//   getRandomColors() {
//     const item =
//       this.state.bgColor[Math.floor(Math.random() * this.state.bgColor.length)];
//     this.setState({
//       selectedColor: item,
//     });
//   }
//   render() {
//     return (
//       <div className="note__list">
//         {this.props.items.map((item) => (
//           <NoteBody key={item.id} {...item} />
//         ))}
//       </div>
//     );
//   }
// }
