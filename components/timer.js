import React, { useState, useEffect } from "react";


const Timer = () => {
  const [seconds, setSeconds] = useState(420);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(420);
    setIsActive(false);
  }

  function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    if(seconds < 0) {
      return '0:00';
    }
    else {
      return `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`
    };
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    } 
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <View>
        <View> {displayTimeLeft(seconds)}</View>
        <View className="row">
          <Button
            className={`button button-primary button-primary-${
              isActive ? "active" : "inactive"
            }`}
            onClick={toggle}
          >
            {isActive ? "Pause" : "Start"}
          </Button>
          <Button className="button" onClick={reset}>
            Reset
          </Button>
        </View>
        </View>
 );
};

export default Timer;