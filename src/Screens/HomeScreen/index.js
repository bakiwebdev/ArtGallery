import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Item from '../../Components/Item';
import AhaduLogo from '../../Images/ahaduLogo.jpg';
const HomeScreen = () => {
  return (
    <ScrollView>
      <Text style={styles.headerTextStyle}>ኢትዮ አርት ጋለሪ</Text>
      <View style={styles.sortMethodStyle}>
        <Text style={styles.sortText}>በቅርቡ የተለቀቁ ሰእሎች </Text>
        <Icon name="chevron-down" size={25} color="#2C3E50" />
      </View>
      <ScrollView style={styles.horizontalItemContainerStyle} horizontal={true}>
        <Item
          price={2500}
          url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.RMkJDc0OyFONQ5rEIAVENwHaF-%26pid%3DApi&f=1"
        />
        <Item
          price={800}
          url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.p8iMv9-GFzeuwLRHtNKEugHaHc%26pid%3DApi&f=1"
        />
        <Item
          price={1050}
          url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.fineartamerica.com%2Fimages%2Fartworkimages%2Fmediumlarge%2F1%2Fethiopian-priest-martha-nesibu.jpg&f=1&nofb=1"
        />
        <Item
          price={4300}
          url="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Famharaofethiopia.weebly.com%2Fuploads%2F9%2F6%2F2%2F2%2F96222396%2F11903786-1008894535855887-193184655103436231-n_orig.jpg&f=1&nofb=1"
        />
        <Item
          price={5000}
          url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F03%2Ff7%2Fea%2F03f7ea80a6ed161936e09dd0cf7e7fcb.jpg&f=1&nofb=1"
        />
        <Item
          price={200}
          url="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.fineartamerica.com%2Fimages-medium-large-5%2Fethiopian-ladies-shoulder-dancing-samuel-daffa.jpg&f=1&nofb=1"
        />
        <Item
          price={599}
          url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F00%2F98%2Fde%2F0098de9846d36fec4b96edf96f3ca0a2--ethiopia.jpg&f=1&nofb=1"
        />
        <Item
          price={3800}
          url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fde%2F91%2F63%2Fde9163bc4e0b9e2579bc6fd7e48734e4.jpg&f=1&nofb=1"
        />
      </ScrollView>
      {/* sponsore text */}
      <View style={styles.sortMethodStyle}>
        <Text style={styles.sortText}>Sponsorship</Text>
      </View>
      {/* sponsorship item view */}
      <View style={styles.sponsorshipStyle}>
        <Image source={AhaduLogo} style={styles.sponsorshipImageStyle} />
        {/* Buttons */}
        <View style={styles.buttonCollections}>
          {/* link button to offical website*/}
          <TouchableOpacity
            style={styles.buttonToWebsiteStyle}
            onPress={() => Linking.openURL('https://www.ahadusolution.com/')}>
            <Text style={styles.buttonTextWebsite}>ወደ ዌብሳይት</Text>
            <Icon name="arrow-forward-circle-sharp" size={30} color="#fff" />
          </TouchableOpacity>
          {/* link button to offical telegram channel */}
          <TouchableOpacity
            style={styles.buttonToTelegramStyle}
            onPress={() => Linking.openURL('https://t.me/ahadusolution')}>
            <Text style={styles.buttonTextTelegram}>ወደ ቴሌግራም </Text>
            <Icon
              name="arrow-forward-circle-sharp"
              size={30}
              color="royalblue"
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* more list */}
      <View style={styles.sortMethodStyle}>
        <Text style={styles.sortText}>በ ብዛት የታዩ </Text>
        <Icon name="list" size={25} color="#2C3E50" />
      </View>
      {/* most viewd list item */}
      <View style={styles.mostViewItemList}>
        <Item
          price={3800}
          url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F2a%2F03%2Fd1%2F2a03d1cce11a973c668b8d86c39d35a8.jpg&f=1&nofb=1"
        />
        <Item
          price={3800}
          url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.uusm.org%2Fsites%2Fdefault%2Ffiles%2Fuploaded_images%2Fnegussie.jpg&f=1&nofb=1"
        />
        <Item
          price={3800}
          url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fartandseek.org%2Fcalendar%2Fimages%2Fevents%2F85725.1.jpg&f=1&nofb=1"
        />
        <Item
          price={3800}
          url="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.bilder.ethiopianculture.de%2Fethiopian-aethiopien%2F13-1558--1-.JPG&f=1&nofb=1"
        />
        <Item
          price={3800}
          url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpaintingvalley.com%2Fimages%2Fethiopian-painting-19.JPG&f=1&nofb=1"
        />
        <Item
          price={3800}
          url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fartquid-art.imgix.net%2F2%2F248%2F194767.1756105212.1.o926940553.jpg&f=1&nofb=1"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ScrollStyle: {},
  headerTextStyle: {
    fontSize: 30,
    fontWeight: '700',
    marginTop: '10%',
    marginBottom: '5%',
    marginLeft: '5%',
  },
  sortMethodStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  sortText: {
    fontSize: 15,
    fontStyle: 'italic',
    marginHorizontal: 5,
  },
  horizontalItemContainerStyle: {
    padding: '5%',
  },
  sponsorshipStyle: {
    width: '94%',
    height: 250,
    marginHorizontal: '3%',
    marginVertical: 5,
    borderColor: 'royalblue',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 5,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 3,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  sponsorshipImageStyle: {
    width: 150,
    height: 200,
  },
  buttonCollections: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttonToWebsiteStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'royalblue',
    padding: 5,
    marginVertical: 2,
    marginBottom: 10,
    marginHorizontal: 15,
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
  buttonTextWebsite: {
    paddingHorizontal: 10,
    color: '#fff',
  },
  buttonTextTelegram: {
    paddingHorizontal: 10,
    color: 'royalblue',
  },
  mostViewItemList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
});
export default HomeScreen;
