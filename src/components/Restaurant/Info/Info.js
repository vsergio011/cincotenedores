import { View } from 'react-native'
import { Text,ListItem,Icon } from '@rneui/base';
import React from 'react'
import {styles} from './Info.style'
import {map} from 'lodash'
import {Map}  from "../../Shared"
export  function Info(props) {
    const {restaurant} = props;

    const listInfo = [
        {
            texto:restaurant.address,
            iconType:"material-community",
            iconName: "map-marker"
        },
        {
            texto:restaurant.phone,
            iconType:"material-community",
            iconName: "phone"
        },
        {
            texto:restaurant.email,
            iconType:"material-community",
            iconName: "email"
        },
    ]
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Informacion sobre el restaurante</Text>
      <Map location={restaurant.location} name={restaurant.name}/>
      {map(listInfo,(item,index)=>(
        <ListItem key={index} bottomDivider>
            <Icon type={item.iconType} name={item.iconName} color="#00a680"/>
            <ListItem.Content>
                <ListItem.Title>{item.texto}</ListItem.Title>
            </ListItem.Content>
        </ListItem>
      ))}
    </View>
  )
}