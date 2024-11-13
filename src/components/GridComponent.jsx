// import React, { useEffect, useState } from 'react';

// // Define patterns for each letter in the word "HELLO"
// // Each letter has a 5x5 grid pattern represented as an array of arrays
// const letterPatterns = {
//   H: [
//     [1, 0, 1],
//     [1, 0, 1],
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 0, 1],
//   ],
//   E: [
//     [1, 1, 1],
//     [1, 0, 0],
//     [1, 1, 1],
//     [1, 0, 0],
//     [1, 1, 1],
//   ],
//   L: [
//     [1, 0, 0],
//     [1, 0, 0],
//     [1, 0, 0],
//     [1, 0, 0],
//     [1, 1, 1],
//   ],
//   O: [
//     [0, 1, 1, 1, 0],
//     [1, 0, 0, 0, 1],
//     [1, 0, 0, 0, 1],
//     [1, 0, 0, 0, 1],
//     [0, 1, 1, 1, 0],
//   ],
// };

// // Array of colors to randomly choose from
// const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A2', '#33FFA8'];

// const DynamicTextGrid = ({ text = "HELLO" }) => {
//   const [gridData, setGridData] = useState([]);
//   const [currentColor, setCurrentColor] = useState(colors[0]);

//   // Generate grid for the entire word
//   useEffect(() => {
//     const generatedGrid = generateGridForWord(text);
//     setGridData(generatedGrid);
//   }, [text, currentColor]);

//   // Change color every 2 seconds
//   useEffect(() => {
//     const colorInterval = setInterval(() => {
//       const newColor = colors[Math.floor(Math.random() * colors.length)];
//       setCurrentColor(newColor);
//     }, 2000);
//     return () => clearInterval(colorInterval);
//   }, []);

//   // Function to generate a grid pattern based on the word
//   const generateGridForWord = (word) => {
//     let grid = [];
//     for (let row = 0; row < 5; row++) { // Each letter pattern has 5 rows
//       let rowArray = [];
//       for (let letter of word) {
//         const pattern = letterPatterns[letter.toUpperCase()] || [];
//         if (pattern[row]) {
//           rowArray = rowArray.concat(
//             pattern[row].map((cell) => (cell === 1 ? currentColor : '#000'))
//           );
//           rowArray.push('#000'); // Spacer between letters
//         }
//       }
//       grid.push(rowArray);
//     }
//     return grid;
//   };

//   return (
//     <div style={styles.page}>
//       <h1 style={styles.title}>Dynamic Text Pattern Grid</h1>
//       <div style={styles.gridContainer(gridData[0]?.length || 0)}>
//         {gridData.map((row, rowIndex) =>
//           row.map((color, colIndex) => (
//             <div
//               key={`${rowIndex}-${colIndex}`}
//               style={{
//                 ...styles.gridItem,
//                 backgroundColor: color,
//               }}
//             />
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// // Define styles
// const styles = {
//   page: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#111',
//     height: '100vh',
//     color: '#fff',
//     fontFamily: 'Arial, sans-serif',
//   },
//   title: {
//     fontSize: '24px',
//     marginBottom: '20px',
//   },
//   gridContainer: (columns) => ({
//     display: 'grid',
//     gridTemplateColumns: `repeat(${columns}, 20px)`, // Adjust dynamically based on text length
//     gap: '2px',
//     padding: '20px',
//     backgroundColor: '#222',
//     border: '2px solid #333',
//   }),
//   gridItem: {
//     width: '20px',
//     height: '20px',
//     backgroundColor: '#333',
//     borderRadius: '2px',
//   },
// };

// export default DynamicTextGrid;





// import React, { useEffect, useState } from 'react';

// // Define patterns for each letter
// const letterPatterns = {
//   H: [
//     [1, 0, 1],
//     [1, 0, 1],
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 0, 1],
//   ],
//   E: [
//     [1, 1, 1],
//     [1, 0, 0],
//     [1, 1, 1],
//     [1, 0, 0],
//     [1, 1, 1],
//   ],
//   L: [
//     [1, 0, 0],
//     [1, 0, 0],
//     [1, 0, 0],
//     [1, 0, 0],
//     [1, 1, 1],
//   ],
//   O: [
//     [0, 1, 1, 1, 0],
//     [1, 0, 0, 0, 1],
//     [1, 0, 0, 0, 1],
//     [1, 0, 0, 0, 1],
//     [0, 1, 1, 1, 0],
//   ],
//   W: [
//     [1, 0, 0, 0, 1],
//     [1, 0, 0, 0, 1],
//     [1, 0, 1, 0, 1],
//     [1, 1, 0, 1, 1],
//     [1, 0, 0, 0, 1],
//   ],
//   R: [
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 0, 1],
//   ],
//   D: [
//     [1, 1, 0],
//     [1, 0, 1],
//     [1, 0, 1],
//     [1, 0, 1],
//     [1, 1, 0],
//   ],
// };

// // Array of words to display dynamically
// const words = ["HELLO", "WORLD"];

// // Array of colors to randomly choose from
// const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A2', '#33FFA8'];

// const DynamicTextGrid = () => {
//   const [gridData, setGridData] = useState([]);
//   const [currentColor, setCurrentColor] = useState(colors[0]);
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [offset, setOffset] = useState(100); // Initial offset for sliding effect

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setOffset((prevOffset) => (prevOffset <= -100 ? 100 : prevOffset - 5)); // Adjust speed here
//     }, 50);

//     return () => clearInterval(interval);
//   }, []);

//   // Update the word and color every few seconds
//   useEffect(() => {
//     if (offset <= -100) {
//       const newColor = colors[Math.floor(Math.random() * colors.length)];
//       const nextWordIndex = (currentWordIndex + 1) % words.length;

//       setCurrentColor(newColor);
//       setCurrentWordIndex(nextWordIndex);

//       const newGridData = generateGridForWord(words[nextWordIndex]);
//       setGridData(newGridData);
//     }
//   }, [offset]);

//   // Generate grid for the word
//   const generateGridForWord = (word) => {
//     let grid = [];
//     for (let row = 0; row < 5; row++) {
//       let rowArray = [];
//       for (let letter of word) {
//         const pattern = letterPatterns[letter.toUpperCase()] || [];
//         if (pattern[row]) {
//           rowArray = rowArray.concat(
//             pattern[row].map((cell) => (cell === 1 ? currentColor : '#000'))
//           );
//           rowArray.push('#000'); // Spacer between letters
//         }
//       }
//       grid.push(rowArray);
//     }
//     return grid;
//   };

//   return (
//     <div style={styles.page}>
//       <h1 style={styles.title}>Dynamic Sliding Text Banner</h1>
//       <div style={styles.gridContainer(gridData[0]?.length || 0, offset)}>
//         {gridData.map((row, rowIndex) =>
//           row.map((color, colIndex) => (
//             <div
//               key={`${rowIndex}-${colIndex}`}
//               style={{
//                 ...styles.gridItem,
//                 backgroundColor: color,
//               }}
//             />
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// // Define styles
// const styles = {
//   page: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#111',
//     height: '100vh',
//     color: '#fff',
//     fontFamily: 'Arial, sans-serif',
//   },
//   title: {
//     fontSize: '24px',
//     marginBottom: '20px',
//   },
//   gridContainer: (columns, offset) => ({
//     display: 'grid',
//     gridTemplateColumns: `repeat(${columns}, 20px)`,
//     gap: '2px',
//     padding: '20px',
//     backgroundColor: '#222',
//     border: '2px solid #333',
//     transform: `translateX(${offset}%)`,
//     transition: 'transform 0.05s linear',
//   }),
//   gridItem: {
//     width: '20px',
//     height: '20px',
//     backgroundColor: '#333',
//     borderRadius: '2px',
//   },
// };

// export default DynamicTextGrid;






import React, { useEffect, useState } from 'react';

// Define patterns for each letter
const letterPatterns = {
  H: [
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1],
  ],
  E: [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
  ],
  L: [
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 1],
  ],
  O: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
  W: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 0, 0, 1],
  ],
  R: [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1],
  ],
  D: [
    [1, 1, 0],
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 0],
  ],
};

// Array of words to display dynamically
const words = ["HELLO", "WORLD"];

// Array of colors to randomly choose from
const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A2', '#33FFA8'];

const DynamicTextGrid = () => {
  const [gridData, setGridData] = useState([]);
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [offset, setOffset] = useState(100); // Initial offset for sliding effect

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => (prevOffset <= -100 ? 100 : prevOffset - 5)); // Adjust speed here
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Update the word and color every few seconds
  useEffect(() => {
    if (offset <= -100) {
      const newColor = colors[Math.floor(Math.random() * colors.length)];
      const nextWordIndex = (currentWordIndex + 1) % words.length;

      setCurrentColor(newColor);
      setCurrentWordIndex(nextWordIndex);

      const newGridData = generateGridForWord(words[nextWordIndex]);
      setGridData(newGridData);
    }
  }, [offset]);

  // Generate grid for the word
  const generateGridForWord = (word) => {
    let grid = [];
    for (let row = 0; row < 5; row++) {
      let rowArray = [];
      for (let letter of word) {
        const pattern = letterPatterns[letter.toUpperCase()] || [];
        if (pattern[row]) {
          rowArray = rowArray.concat(
            pattern[row].map((cell) => (cell === 1 ? currentColor : '#000'))
          );
          rowArray.push('#000'); // Spacer between letters
        }
      }
      grid.push(rowArray);
    }
    return grid;
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Dynamic Sliding Text Banner</h1>
      <div style={{width:"200px"}}>

     
      <div style={styles.gridContainer(gridData[0]?.length || 0, offset)}>
        {gridData.map((row, rowIndex) =>
          row.map((color, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              style={{
                ...styles.gridItem,
                backgroundColor: color,
              }}
            />
          ))
        )}
      </div>
      </div>
    </div>
  );
};

// Define styles
const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111',
    height: '100vh',
    // width:"500px",
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  gridContainer: (columns, offset) => ({
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 20px)`,
    gap: '2px',
    padding: '20px',
    // backgroundColor: '#222',
    // border: '2px solid #333',
    transform: `translateX(${offset}%)`,
    transition: 'transform 0.05s linear',
    // width: "2000px"
  }),
  gridItem: {
    width: '20px',
    height: '20px',
    backgroundColor: '#333',
    borderRadius: '2px',
    // width:"500px",
  },
};

export default DynamicTextGrid;
