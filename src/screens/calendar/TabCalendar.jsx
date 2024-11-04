import { View, FlatList } from 'react-native'
import React from 'react'
import {styles} from './TabCalendar.style.js'
import { appointments } from '../../data/db.js'
import Appointments from '../../components/appointments/appointments.jsx'




const TabCalendar = () => {
    return (
        <View style={styles.container}>
          
    
          <FlatList  data={appointments}
                keyExtractor={(appoint) => appoint.id_appointment}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return <Appointments service={item.service}
                        doctor={item.doctor}
                        specialty={item.specialty}
                    />
                    
    
                }}/>
        </View>
      )
}

export default TabCalendar