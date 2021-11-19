import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Dimensions,
  useColorScheme,
  View,
} from 'react-native';

import {Provider as PaperProvider, TextInput, Button} from 'react-native-paper';
import eIcon from './assets/email.png';
import pIcon from './assets/password.png';
import svg1 from './assets/1.png';
import svg2 from './assets/2.png';
import svg3 from './assets/3.png';

const width = Dimensions.get('window').width;

const App = () => {
  return (
    <PaperProvider>
      <View style={styles.Container}>
        <View style={styles.upperContainer}>
          <Image
            source={require('./assets/3.png')}
            resizeMode="cover"
            style={styles.Image}
          />
        </View>
        <View style={styles.lowerContainer}>
          <TextInput
            mode="outlined"
            label="Email"
            placeholder="email@domain.com"
            keyboardType="email-address"
            left={<TextInput.Icon name={eIcon} />}
            outlineColor="#778899"
            activeOutlineColor="#000"
          />
          <TextInput
            mode="outlined"
            label="Password"
            placeholder="password"
            secureTextEntry={true}
            left={<TextInput.Icon name={pIcon} />}
            outlineColor="#778899"
            activeOutlineColor="#000"
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
  upperContainer: {
    flex: 1,
    justifyContent: 'center',
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
