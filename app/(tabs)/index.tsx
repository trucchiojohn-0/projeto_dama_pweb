import { View, Text, Pressable } from 'react-native';
import {stylesGlobal} from '../../frontend/styles/index.js'

export default function HomeScreen() {
  return (
    <View style={stylesGlobal.container}>
      <Pressable style={stylesGlobal.button}>
        List Products
      </Pressable>
      
      <Pressable style={stylesGlobal.button}>
        Create products
      </Pressable>
      
      <Pressable style={stylesGlobal.button}>
        About
      </Pressable>
    </View>
  );
}

