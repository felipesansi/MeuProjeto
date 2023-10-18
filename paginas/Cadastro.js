import { Text } from 'react-native-elements';
import { StyleSheet,  View } from 'react-native';
import { Input,Button } from 'react-native-elements';
import styles  from '../estilo/style';
import { useState } from 'react';
import { TextInputMask } from 'react-native-masked-text'

export default function Cadastro({navigation}) {


  const [cpf, Setcpf] = useState(null);
  const [erroCpf,SetErroCpf]= useState(null);
  return (
    <View style={styles.container}>
      <Text h3 style={styles.titulo}>Cadastro</Text>
    <Input  style={styles.Input}
      placeholder='Nome'
     
    />
  <View style ={styles.containnermask}>
     <TextInputMask style={styles.mask}
      placeholder='CPF'
     keyboardType='number-pad'
     type={'cpf'}
     returnKeyType='done'
     value={cpf}
     onChangeText={value =>{
      Setcpf(value)

     }}

    />
    </View>
     <Input style={styles.Input}
      placeholder='Telefone'
     keyboardType='nuber-pad'
     returnKeyType='ok'

    />
     <Input style={styles.Input}
      placeholder='E-mail'
     keyboardType='email-address'
    />

<Button 
              title="Salvar"
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


