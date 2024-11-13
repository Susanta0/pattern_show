import React from 'react';

// Define the pattern for the letter "A" in a 10x10 grid
const pattern = [
  [0, 0, 1, 1, 1, 0, 0],
  [0, 1, 0, 0, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
];

// Main component
const LetterGrid = () => {
  return (
    <div style={styles.gridContainer}>
      {pattern.flat().map((cell, index) => (
        <div
          key={index}
          style={{
            ...styles.gridItem,
            backgroundColor: cell === 1 ? '#FF0000' : '#000', // Red for "on" cells, Black for "off" cells
          }}
        />
      ))}
    </div>
  );
};

const styles = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: `repeat(${pattern[0].length}, 20px)`, // Adjust based on pattern width
    gap: '2px',
  },
  gridItem: {
    width: '20px',
    height: '20px',
    borderRadius: '4px',
  },
};

export default LetterGrid;
