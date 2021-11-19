import React from 'react';
import {Image, StyleSheet, Text, Dimensions, View} from 'react-native';

import {Provider as PaperProvider, TextInput, Button} from 'react-native-paper';
import FadeCarousel from 'rn-fade-carousel';
import eIcon from './assets/email.png';
import pIcon from './assets/password.png';
import svg1 from './assets/1.png';
import svg2 from './assets/2.png';
import svg3 from './assets/3.png';

const width = Dimensions.get('window').width;

const App = () => {
  const slides = [
    <Image source={svg1} style={styles.Image} resizeMode="cover" />,
    <Image source={svg2} style={styles.Image} resizeMode="cover" />,
    <Image source={svg3} style={styles.Image} resizeMode="cover" />,
  ];
  return (
    <PaperProvider>
      <View style={styles.Container}>
        <FadeCarousel
          elements={slides}
          containerStyle={styles.upperContainer}
          fadeDuration={1500}
          stillDuration={1500}
          start={true}
        />
        <View style={styles.lowerContainer}>
          <TextInput
            mode="outlined"
            label="Email"
            placeholder="email@domain.com"
            keyboardType="email-address"
            left={<TextInput.Icon name={eIcon} />}
            outlineColor="#778899"
            activeOutlineColor="#000"
            style={styles.TextInput}
          />
          <TextInput
            mode="outlined"
            label="Password"
            placeholder="password"
            secureTextEntry={true}
            left={<TextInput.Icon name={pIcon} />}
            outlineColor="#778899"
            activeOutlineColor="#000"
            style={styles.TextInput}
          />
          <Text style={{marginLeft: 'auto', marginVertical: 3}}>
            {' '}
            Forgot Password?{' '}
          </Text>

          <Button color="#fff" style={styles.Button}>
            Log In
          </Button>

          <Text style={{alignSelf: 'center', fontSize: 15, marginVertical: 9}}>
            Don't have an account? <Text style={{color: 'blue'}}>Register</Text>
          </Text>
        </View>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  Image: {
    height: 300,
    width: 300,
    alignSelf: 'center',
  },
  Container: {
    flex: 1,
    justifyContent: 'center',
  },
  TextInput: {
    marginVertical: 6,
  },
  upperContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerContainer: {
    flex: 1,
    paddingHorizontal: 12,
  },
  Button: {
    backgroundColor: '#000',
    color: '#fff',
    marginTop: 45,
    width: width / 2.7,
    height: 42,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 9,
  },
});

export default App;
