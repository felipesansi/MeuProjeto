import { Text } from 'react-native-elements';
import { StyleSheet,  View } from 'react-native';
import { Input,Button } from 'react-native-elements';
import styles  from './estilo/style';

export default function App() {
  return (
    <View style={styles.container}>
      <Text h3>Login</Text>
    <Input 
      placeholder='E-MAIL'
      leftIcon={{type:'font-awesome', name: 'envelope', color:'white'}}
      keyboordType="email-address"
    />
     <Input 
      placeholder='Senha'
      leftIcon={{type:'font-awesome', name: 'lock', color:'white'}}
      secureTextEntry={true}
    />

<Button
              title="ENTRAR"
              icon={{
                name: 'check',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              />

    </View>
  );
}


