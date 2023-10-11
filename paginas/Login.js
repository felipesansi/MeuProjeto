import { Text } from 'react-native-elements';
import { StyleSheet,  View } from 'react-native';
import { Input,Button } from 'react-native-elements';
import styles  from '../estilo/style';

export default function Login({navigation}) {
    const casdastrar= ()=>{
        navigator.navigate('Cadastro')
    }
  return (
    <View style={styles.container}>
      <Text h3 style={styles.titulo}>Login</Text>
    <Input  style={styles.Input}
      placeholder='E-MAIL'
      leftIcon={{type:'font-awesome', name: 'envelope', color:'white'}}
      keyboardType='email-address'
   
    />
     <Input style={styles.Input}
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
<Button
              title="Cadastre-se"
              icon={{
                name: 'check',
                type: 'font-awesome',
                size: 15,
                color: 'white',
             
              }}
              onPress={()=>casdatrar()}
              />
                
    </View>
  );
}


