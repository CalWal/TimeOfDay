import React from "react";

function TimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  const styles = {
    fontSize: 50,
    textAlign: "center",
    fontFamily: "Helvetica Neue"
  };

  let timeDecider;
  if (hours < 12) {
    timeDecider = "Good Morning!";
    styles.color = "white";
    styles.backgroundColor = "orange";
  } else if (hours >= 12 && hours < 17) {
    timeDecider = "Good Afternoon!";
    styles.color = "white";
    styles.backgroundColor = "#337bc4";
  } else {
    timeDecider = "Good Night!";
    styles.color = "#68d86b";
    styles.backgroundColor = "black";
  }

  return <h1 style={styles}>{timeDecider}</h1>;
}

export default TimeOfDay;
