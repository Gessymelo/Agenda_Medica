
import React from 'react'
import { TouchableOpacity, Text, Alert } from 'react-native'
import { styles } from "./button.style";

const Button = (props) => {

  function TesteClick(){
    Alert.alert("isso e um alerta");
  }

  return(
    <TouchableOpacity onPress={TesteClick} style={styles.btn}>
      
        <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  ) 
    
}

export default Button