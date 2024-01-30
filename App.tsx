
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
const {useNavigation} = require('@react-navigation/native');
import Home from './Home';
import Settings from './Settings';
import { StyleSheet, Text, View ,Button } from 'react-native';

const Drawer = createDrawerNavigator();
const nav = useNavigation();
export default function App() {
  return (
    <>
    
    <View style={style.container}>
    <Text>Open up App.tsx to start working on your app!</Text>
    <Button title="Go to Home" onPress={() => nav.navigate('Home')}/>
    <Button title="Go to Settings" onPress={() => nav.navigate('Settings')}/>
    </View>
    </>
    
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
