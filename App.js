import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from './src/componentes/Header';
import Content from './src/componentes/Content';
import Footer from './src/componentes/Footer';
import {styles} from './styles/style';

export default function App() {
  return (
    <View style={styles.cont}>
      <ScrollView>
        <Header/>
        <Content/>
        <Footer/>
      </ScrollView>
    </View>
  );
}


