import React from 'react';
import { View, Text, Button } from 'react-native';

export default function GoogleLoginScreen({ navigation }) {
  const handleLogin = () => {
    // Placeholder for actual login logic
    alert('Google Login will be implemented here');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login with Google</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
