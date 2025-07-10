// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GoogleLoginScreen from './screens/GoogleLoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={GoogleLoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
