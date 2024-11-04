import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './TabProfile.style'

const TabProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.title}>Nome</Text>
        <Text style={styles.text}>heber stein</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>E-mail</Text>
        <Text style={styles.text}>heber@stein</Text>
      </View>
    </View>
  )
}

export default TabProfile