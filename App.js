import { Text } from 'react-native-elements';
import { StyleSheet,  View } from 'react-native';
import { Input,Button } from 'react-native-elements';
import styles  from './estilo/style';
import Login from './paginas/Login';
import Cadastro from './paginas/Cadastro';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Cadastro from './paginas/Cadastro';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}


