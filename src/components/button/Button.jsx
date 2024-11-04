
import React from 'react'
import { TouchableOpacity, Text, Alert } from 'react-native'
import { styles } from "./button.style";

const Button = (props) => {

  function TesteClick(){
    Alert.alert("isso e um alerta");
  }

  return(
    <TouchableOpacity style={[styles.btn, props.theme == "danger" ? styles.danger : styles.primary]}
      onPress={TesteClick} >
      
        <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  ) 
    
}

export default Button