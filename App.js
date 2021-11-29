import React from 'react';
import 'react-native-reanimated';
import {View as MotiView} from 'moti';
import {
  Image,
  StyleSheet,
  Text,
  Dimensions,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
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
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.Container}>
          <View style={styles.upperContainer}>
            <FadeCarousel
              elements={slides}
              containerStyle={styles.Carousel}
              fadeDuration={1500}
              stillDuration={1500}
              start={true}
            />
          </View>
          <View style={styles.lowerContainer}>
            <MotiView
              from={{translateY: 30, opacity: 0}}
              animate={{translateY: 0, opacity: 1}}
              transition={{type: 'spring'}}>
              <TextInput
                mode="outlined"
                label="Email"
                placeholder="email@domain.com"
                keyboardType="email-address"
                left={<TextInput.Icon name={eIcon} />}
                outlineColor="#778899"
                activeOutlineColor="#000"
                style={(styles.TextInput, {alignContent: 'center'})}
              />
            </MotiView>
            <MotiView
              from={{translateY: 30, opacity: 0}}
              animate={{translateY: 0, opacity: 1}}
              transition={{type: 'spring'}}
              delay={210}>
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
            </MotiView>
            <MotiView
              from={{translateY: 30, opacity: 0}}
              animate={{translateY: 0, opacity: 1}}
              transition={{type: 'spring'}}
              delay={300}>
              <Text style={{marginLeft: 'auto', marginVertical: 3}}>
                {' '}
                Forgot Password?{' '}
              </Text>
            </MotiView>
            <MotiView
              from={{translateY: 30, opacity: 0}}
              animate={{translateY: 0, opacity: 1}}
              transition={{type: 'spring'}}
              delay={390}>
              <Button color="#fff" style={styles.Button}>
                Log In
              </Button>
            </MotiView>
            <MotiView
              from={{translateY: 30, opacity: 0}}
              animate={{translateY: 0, opacity: 1}}
              transition={{type: 'spring'}}
              delay={480}>
              <Text
                style={{alignSelf: 'center', fontSize: 15, marginVertical: 9}}>
                Don't have an account?{' '}
                <Text style={{color: 'blue'}}>Register</Text>
              </Text>
            </MotiView>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  Image: {
    height: 360,
    width: 360,
    alignSelf: 'center',
  },
  Container: {
    height: Dimensions.get('window').height,
  },
  TextInput: {
    marginVertical: 18,
    height: 54,
  },
  upperContainer: {
    height: Dimensions.get('window').height / 2.4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 9,
  },
  Carousel: {
    height: '100%',
    width: '100%',
  },
  lowerContainer: {
    paddingHorizontal: 12,
  },
  Button: {
    backgroundColor: '#000',
    color: '#fff',
    marginTop: 45,
    width: width - 24,
    height: 54,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 9,
  },
});

export default App;
