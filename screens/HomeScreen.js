import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { firebase } from '../utils/firebaseConfig';

WebBrowser.maybeCompleteAuthSession();

export default function HomeScreen() {
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '303726026304-q04epu22kkk6ojgsgeojp8ag8s18n9ue.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
      firebase.auth().signInWithCredential(credential)
        .then(userCredential => {
          setUserInfo(userCredential.user);
        })
        .catch(error => console.error('Firebase sign in error:', error));
    }
  }, [response]);

  return (
    <View style={{ padding: 20 }}>
      {userInfo ? (
        <>
          <Text>Welcome, {userInfo.displayName}</Text>
          <Text>Email: {userInfo.email}</Text>
        </>
      ) : (
        <Button title="Login with Google" disabled={!request} onPress={() => promptAsync()} />
      )}
    </View>
  );
}
