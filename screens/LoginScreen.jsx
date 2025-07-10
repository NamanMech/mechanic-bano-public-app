import React, { useEffect } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { initializeAuth, getReactNativePersistence, signInWithCredential, GoogleAuthProvider } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebaseApp } from '../utils/firebaseConfig';

WebBrowser.maybeCompleteAuthSession();

const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export default function LoginScreen({ navigation }) {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: '303726026304-5t2ef1jqlptv8hiuf2aqgkoju8bi3rqd.apps.googleusercontent.com',
  });

  useEffect(() => {
    const authenticate = async () => {
      if (response?.type === 'success') {
        const { id_token } = response.params;
        const credential = GoogleAuthProvider.credential(id_token);
        await signInWithCredential(auth, credential);
        navigation.replace('Home'); // Redirect to Home screen after login
      }
    };

    authenticate();
  }, [response]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mechanic Bano - Login</Text>
      <Button
        disabled={!request}
        title="Sign in with Google"
        onPress={() => promptAsync()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
