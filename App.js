import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import contacts from './assets/data/contacts.json';

// const contacts = ['Mark, Elite, Jeff'];

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.page}>
      <FlatList 
      data={contacts} renderItem={({item}) => (
      <Text style={styles.contactName}>{item.user_display_name}</Text>
      )} 
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 15,
  },
  contactName: {
    fontSize: 18,
    marginVertical: 5,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#bfbfbf',
  },
});

export default App;