import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';


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
      return <Text>`${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`</Text>
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
        <View> 
        <Text>{displayTimeLeft(seconds)}</Text>
        </View>
        <View className="row">
          <Button
            className={`button button-primary button-primary-${
              isActive ? "active" : "inactive"}`}
            onClick={toggle}
          >
            {isActive ? <Text>Pause</Text> : <Text>Start</Text>}
          </Button>
          <Button className="button" onClick={reset}>
            <Text>Reset</Text>
          </Button>
        </View>
        </View>
 );
};

export default Timer;