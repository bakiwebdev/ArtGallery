import React from 'react';
import {
  View,
  Text,
  Button,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import BackgroundImage from '../../Images/art1.jpg';
import Icon from 'react-native-vector-icons/Ionicons';

const StartUpScreen = props => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={BackgroundImage}
        resizeMode="cover"
        blurRadius={2}
        style={styles.image}>
        <View style={styles.overlay} />
        <Text style={styles.textStyle}>የራሶን</Text>
        <Text style={styles.textStyle}>ደስታ የፍጠሩ!</Text>
        <TouchableOpacity
          style={styles.buttonWithIcon}
          onPress={() => props.navigation.navigate('Main')}>
          <Text style={styles.buttonText}>ጀምር</Text>
          <Icon name="arrow-forward-circle-sharp" size={30} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  textStyle: {
    padding: 15,
    fontSize: 60,
    color: '#ffffff',
    fontWeight: '900',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  buttonWithIcon: {
    marginVertical: 40,
    marginHorizontal: 20,
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  buttonText: {
    fontSize: 40,
    marginHorizontal: 12,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default StartUpScreen;
