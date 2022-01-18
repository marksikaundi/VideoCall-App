import { StatusBar } from 'expo-status-bar';
import {  SafeAreaView } from 'react-native';
import ContactScreen from './src/screens/ContactScreen';
import CallingScreen from './src/screens/CallingScreen';
// const contacts = ['Mark, Elite, Jeff'];

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} /> 

      <CallingScreen />
    </SafeAreaView>
  );
};



export default App;