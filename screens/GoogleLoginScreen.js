// screens/GoogleLoginScreen.js
import React, { useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { firebase } from '../utils/firebaseConfig';

WebBrowser.maybeCompleteAuthSession();

export default function GoogleLoginScreen() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '303726026304-1mp19dt0i3u6npf63k4a1ki0oeffkvch.apps.googleusercontent.com',
    androidClientId: '303726026304-1mp19dt0i3u6npf63k4a1ki0oeffkvch.apps.googleusercontent.com',
    iosClientId: '303726026304-1mp19dt0i3u6npf63k4a1ki0oeffkvch.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
      firebase.auth().signInWithCredential(credential)
        .then(userCred => {
          console.log('User:', userCred.user.email);
        })
        .catch(err => {
          console.log('Firebase login error', err);
        });
    }
  }, [response]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Login with Google</Text>
      <Button title="Login" disabled={!request} onPress={() => promptAsync()} />
    </View>
  );
}
