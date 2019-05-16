import React from 'react';

// finish writing the DogList functional component here
const DogList = props => {
  return (
    <ul>
      {props.dogs.map(dog => (
        <li key={dog.id}>{dog.name}</li>
      ))}
    </ul>
  );
};

export default DogList;
