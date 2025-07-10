import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { firebase } from '../utils/firebaseConfig';

export default function HomeScreen() {
  useEffect(() => {
    firebase.auth().signInAnonymously()
      .then(() => {
        console.log('Signed in anonymously');
      })
      .catch(error => {
        console.error('Auth error:', error);
      });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Firebase is working ✅</Text>
    </View>
  );
}
