import { StatusBar } from 'expo-status-bar';
import {  SafeAreaView } from 'react-native';
import ContactScreen from './src/screens/ContactScreen';

// const contacts = ['Mark, Elite, Jeff'];

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} /> 

      <ContactScreen />
    </SafeAreaView>
  );
};



export default App;