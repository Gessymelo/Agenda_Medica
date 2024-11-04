import { View, Text, TouchableOpacity , Image} from 'react-native'
import React from 'react'
import { styles } from './Doctor.style'

const Doctor = (props) => {
  return (
    <TouchableOpacity style={styles.doctor}>
      <Image source={props.icon} style={styles.icon}/>
      <View>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.specialty}>{props.specialty}</Text>
      </View>
      
    </TouchableOpacity>
  )
}

export default Doctor