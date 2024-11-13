import React, { useEffect, useState } from "react";

// Define patterns for each letter
const letterPatterns = {
  H: [[1, 0, 1],[1, 0, 1],[1, 1, 1],[1, 0, 1],[1, 0, 1],],
  E: [[1, 1, 1],[1, 0, 0],[1, 1, 1],[1, 0, 0],[1, 1, 1],],
  L: [[1, 0, 0],[1, 0, 0],[1, 0, 0],[1, 0, 0],[1, 1, 1],],
  O: [[0, 1, 1, 1, 0],[1, 0, 0, 0, 1],[1, 0, 0, 0, 1],[1, 0, 0, 0, 1],[0, 1, 1, 1, 0],],
  W: [[1, 0, 0, 0, 1],[1, 0, 0, 0, 1],[1, 0, 1, 0, 1],[1, 1, 0, 1, 1],[1, 0, 0, 0, 1],],
  R: [[1, 1, 1],[1, 0, 1],[1, 1, 1],[1, 0, 1],[1, 0, 1],],
  D: [[1, 1, 0],[1, 0, 1],[1, 0, 1],[1, 0, 1],[1, 1, 0],],
  A: [[0, 1, 0],[1, 0, 1],[1, 1, 1],[1, 0, 1],[1, 0, 1],],
  C: [[0, 1, 1],[1, 0, 0],[1, 0, 0],[1, 0, 0],[0, 1, 1],],
  T: [[1, 1, 1],[0, 1, 0],[0, 1, 0],[0, 1, 0],[0, 1, 0],],
  P: [[1, 1, 1],[1, 0, 1],[1, 1, 1],[1, 0, 0],[1, 0, 0],],
  Y: [[1, 0, 1],[1, 0, 1],[0, 1, 0],[0, 1, 0],[0, 1, 0],],
  N: [[1, 0, 1],[1, 1, 1],[1, 1, 1],[1, 1, 1],[1, 0, 1],],
  J: [[0, 1, 1, 1],[0, 0, 1, 0],[0, 0, 1, 0],[1, 0, 1, 0],[0, 1, 1, 0],],
  V: [[1, 0, 0, 0, 1],[1, 0, 0, 0, 1],[1, 0, 0, 0, 1],[0, 1, 0, 1, 0],[0, 0, 1, 0, 0],],
  S: [[0, 1, 1, 1],[1, 0, 0, 0],[0, 1, 1, 0],[0, 0, 0, 1],[1, 1, 1, 0],],
  I: [[0, 1, 0],[0, 1, 0],[0, 1, 0],[0, 1, 0],[0, 1, 0],],
};

// Array of words to display dynamically
const words = ["HELLO", "WORLD", "REACT", "JAVASCRIPT", "NODE", "PYTHON"];

// Array of colors to randomly choose from
const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A2", "#33FFA8"];

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
            pattern[row].map((cell) => (cell === 1 ? currentColor : "#000"))
          );
          rowArray.push("#000"); // Spacer between letters
        }
      }
      grid.push(rowArray);
    }
    return grid;
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Dynamic Sliding Text Banner</h1>
      <div style={{ width: "200px" }}>
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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#111",
    height: "100vh",
    // width:"500px",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  gridContainer: (columns, offset) => ({
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 20px)`,
    gap: "2px",
    padding: "20px",
    // backgroundColor: '#222',
    // border: '2px solid #333',
    transform: `translateX(${offset}%)`,
    transition: "transform 0.05s linear",
    // width: "2000px"
  }),
  gridItem: {
    width: "20px",
    height: "20px",
    backgroundColor: "#333",
    borderRadius: "2px",
    // width:"500px",
  },
};

export default DynamicTextGrid;
