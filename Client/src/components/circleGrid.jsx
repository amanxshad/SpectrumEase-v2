import React, {useState, useEffect} from 'react';
import '../stylesheets/CircleGrid.scss';

const CircleGrid = ({ datas }) => {
  const rows = 6; // Number of rows
  const cols = 6; // Number of columns

  const [currentIndex, setCurrentIndex] = useState(0); // Track the current index of datas
  const [spotIndex, setSpotIndex] = useState(null); // Index for 'spot' class
  const [circleColors, setCircleColors] = useState([]); // State for storing the colors of circles



  useEffect(() => {
    if (datas.length === 0) return; 
  
    // Initialize color array for all circles (default color)
    const newCircleColors = new Array(rows * cols).fill(datas[currentIndex].color);
  
    // Set the color of the circle at the spot index to colorOdd
    if (spotIndex !== null) {
      newCircleColors[spotIndex] = datas[currentIndex].colorOdd;
    }
  
    setCircleColors(newCircleColors); // Update all circles with appropriate colors
  
    // Set an interval to update colors every 3 seconds
    const intervalId = setInterval(() => {
      const updatedColors = new Array(rows * cols).fill(datas[currentIndex].color); // Set default color for all circles
      
      // Update the 'spot' circle color to colorOdd
      updatedColors[spotIndex] = datas[currentIndex].colorOdd;
      setCircleColors(updatedColors); // Update circle colors
      
      // Randomly assign the spot index
      setSpotIndex(Math.floor(Math.random() * (rows * cols)));
  
      // Move to the next color entry in datas
      setCurrentIndex((prevIndex) => (prevIndex + 1) % datas.length);
    }, 3000); // Update colors every 3 seconds
  
    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [datas, currentIndex, rows, cols, spotIndex]);




  return (
    <div className="circle-grid">
      {Array.from({ length: rows * cols }, (_, index) => {
        const row = Math.floor(index / cols);
        return (
          <div
            key={index}
            className={`circle ${spotIndex === index ? 'spot' : ''}`}
            style={{
              backgroundColor: circleColors[index], // Set circle color
            }}
            data-row={row}
          />
        );
      })}
    </div>
  );
};

export default CircleGrid;


