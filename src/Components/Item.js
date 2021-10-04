import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Item = props => {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={{
          uri: props.url,
        }}
        style={styles.pictureStyle}
      />
      <Text style={styles.priceStyle}>
        {props.price}
        <Text style={styles.birrTextStyle}> ብር</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: 180,
    height: 250,
    marginHorizontal: 8,
  },
  pictureStyle: {
    width: 180,
    height: 220,
    borderRadius: 10,
  },
  priceStyle: {
    color: '#2ECC71',
    marginVertical: '3%',
    fontSize: 18,
    paddingHorizontal: 5,
  },
  birrTextStyle: {
    color: '#4c4c4c',
    fontSize: 13,
    paddingHorizontal: 5,
  },
});
export default Item;
