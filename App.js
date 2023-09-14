import { Text } from 'react-native-elements';
import { StyleSheet,  View } from 'react-native';
import { Input,Button } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <Text h3>Login</Text>
    <Input 
      placeholder='E-MAIL'
      leftIcon={{type:'font-awesome', name: 'envelope'}}
      keyboordType="email-address"
    />
     <Input 
      placeholder='Senha'
      leftIcon={{type:'font-awesome', name: 'lock'}}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
