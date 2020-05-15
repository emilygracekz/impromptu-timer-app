import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function Quote () {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [hyphen, setHyphen] = useState("");
  const fetchData = async () => {
    let data, result;
    try {
      data = await fetch("https://api.quotable.io/random");
      result = await data.json();
    } catch (err) {
      console.log(err);
    }
    return result;
  };

  const populateData = async () => {
    const result = await fetchData();
    setQuote(result.content);
    setAuthor(result.author);
    setHyphen('-');
  };

  useEffect(() => {
    populateData;
  }, []);

  return (
    <View style={styles.quoteBox}>
          <Text>{quote}</Text>
          <Text>{`${hyphen}${author}`}</Text>
            <TouchableOpacity 
            style={styles.getQuote}
            className="getQuote" onClick={populateData}>
              <Text style={styles.whiteText}
              >
              Get Quotation
              </Text>
            </TouchableOpacity>
    </View>
  );
}

export default Quote;

const styles = StyleSheet.create({
    getQuote: {
      padding: 15,
      margin: 10,
      borderRadius: 30,
      fontWeight: 'bold',
      fontSize: .8,
      backgroundColor: '#7facd6',
    },

    whiteText: {
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing: .2,
    },

    quoteBox: {
        color: '#536197',

    }
  });