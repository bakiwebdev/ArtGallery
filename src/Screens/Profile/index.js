import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  return (
    <View style={styles.main}>
      <Text>ይህ ቦታ ለእርሶ ነው የተቀመጠው፡፡ ኮዱን ወስደው ይስሩበት ፡ )</Text>
      <Text>source code ቴሌግራም ቻናል ላይ ይገኛል</Text>
      <TouchableOpacity
        style={styles.buttonToTelegramStyle}
        onPress={() => Linking.openURL('https://t.me/ahadusolution')}>
        <Text style={styles.buttonTextTelegram}>ወደ ቴሌግራም </Text>
        <Icon name="arrow-forward-circle-sharp" size={30} color="royalblue" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonToTelegramStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'royalblue',
    padding: 5,
    marginVertical: 2,
    marginBottom: 10,
    marginHorizontal: 15,
  },
  buttonTextTelegram: {
    paddingHorizontal: 10,
    color: 'royalblue',
  },
});

export default ProfileScreen;
