import { View, Text, Image, TextInput, TouchableOpacity  } from 'react-native'
import React from 'react'
import icon from '../../constants/icon.js'
import { styles } from './Login.style'
import Button from '../../components/button/Button'



const Login = () => {
  return (
    <View style={styles.container}>

        <View style={styles.containerLogo}>
            <Image source={icon.logo} style={styles.logo}/>
        </View>

        <View>
            <View style={styles.containerInput}>
                <TextInput placeholder= "E-mail" style={styles.input}/>
            </View>
            <View style={styles.containerInput}>
                <TextInput placeholder="Senha" style={styles.input}
                secureTextEntry={true}/>
            </View>        
            <Button text="Acessar"/>
        </View>

        <View style={styles.footer}>
            <Text>Não tenho conta.</Text>
            <TouchableOpacity >
                <Text style={styles.footerLink}>Criar conta agora.</Text>
            </TouchableOpacity>
        </View>

        


      
    </View>
  )
}

export default Login