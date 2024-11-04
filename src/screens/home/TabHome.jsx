import { View, Text, FlatList } from 'react-native'
import React from 'react'
import {styles} from './TabHome.style.js'
import { doctors } from '../../data/db.js'
import icon from'../../constants/icon.js'
import Doctor from '../../components/doctor/Doctor.jsx'

const TabHome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Agende os seus serviços médeicos</Text>

      <FlatList  data={doctors}
            keyExtractor={(doc) => doc.id_doctor}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Doctor name={item.name}
                icon={item.icon == "M" ? icon.male : icon.female}
                specialty={item.specialty}
                />
                

            }}/>
    </View>
  )
}

export default TabHome