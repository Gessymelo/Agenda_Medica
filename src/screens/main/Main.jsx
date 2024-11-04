import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image, Text } from 'react-native'
import React from 'react'
import TabHome from '../home/TabHome'
import TabCalendar from '../calendar/TabCalendar'
import TabProfile from '../profile/TabProfile'
import icon from '../../constants/icon'

const Main = () => {
    const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name ="Home" component={TabHome} options={{
                headerTitleAlign: "center",
                headerTitle: () => {
                    return <Image  source={icon.logo}
                     style={{width: 190, height: 36}}/>
                },
                tabBarShowLabel: false,
                tabBarIcon:({focused}) =>{
                    return <Image  source={icon.home}
                    style={{width: 25,
                         height: 25,
                          opacity: focused ? 1 : 0.3 
                        }}/>
                }
            }}/>
            <Tab.Screen name ="Calendar" component={TabCalendar} options={{
                headerTitleAlign: "center",
                headerTitle: () => {
                    return <Image  source={icon.logo}
                     style={{width: 190, height: 36}}/>
                },
                tabBarShowLabel: false,
                tabBarIcon:({focused}) =>{
                    return <Image  source={icon.calendar}
                    style={{width: 25, 
                        height: 25,
                        opacity: focused ? 1 : 0.3 
                    }}/>
                }
            }}/>
            <Tab.Screen name ="Profile" component={TabProfile} options={{
                headerTitleAlign: "center",
                headerTitle: () => {
                    return <Image  source={icon.logo}
                     style={{width: 190, height: 36}}/>
                },
                tabBarShowLabel: false,
                tabBarIcon:({focused}) =>{
                    return <Image  source={icon.profile}
                    style={{width: 25,
                         height: 25,
                         opacity: focused ? 1 : 0.3 
                        }}/>
                }
            }}
            />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Main