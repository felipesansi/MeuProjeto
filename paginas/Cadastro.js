import { Text } from 'react-native-elements';
import { StyleSheet,  View } from 'react-native';
import { Input,Button } from 'react-native-elements';
import styles  from '../estilo/style';

export default function Cadastro(navigation) {
  return (
    <View style={styles.container}>
      <Text h3 style={styles.titulo}>Cadastro</Text>
    <Input  style={styles.Input}
      placeholder='Nome'
     
    />
     <Input style={styles.Input}
      placeholder='CPF'
     keyboardType='nuber-pad'
    />
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


