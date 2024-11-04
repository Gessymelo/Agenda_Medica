import { View, Text,Image } from 'react-native'
import React from 'react'
import { styles } from './appointments.style'
import icon from '../../constants/icon'
import Button from '../button/Button'

const appointments = (props) => {
  return (
    <View style={styles.appointment}>
      <Text style={styles.name}>{props.service} - {props.doctor}</Text>
      <Text style={styles.specialty}>{props.specialty}</Text>
      <View style={styles.container}>
        <View style={styles.containerBooking}>
          <View style={styles.booking}>
                <Image style={styles.icon} source={icon.calendar}/>
                <Text style={styles.bookingDate}> 03/11/2024</Text>
          </View>
          <View style={styles.booking}>
            <Image style={styles.icon} source={icon.clock}/>
            <Text style={styles.bookingHour}> 18:33</Text>
          </View>
        </View>
        <View style={styles.containerButton}>
            <Button text="Cancelar Reserva" theme = "danger"/>
        </View>

      </View>
    </View>
  )
}

export default appointments