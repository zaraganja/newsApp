import React from "react";
import { StyleSheet,Text,View,Image, } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const HomeHeader =(props)=>{
    return(
        <View style={styles.HeaderStyle}>
            <View >
                  
            
                <MaterialIcons name="menu-open" size={22} color="#333" style={styles.headerIcon} onPress={()=>
            props.navigation.openDrawer()
            } />
            </View>
            <View>
                <Image source={require('../images/avatar.png')} style={styles.avatarStyle}/>

                {/* //create badge / baj . bajبج be che dardi mikhore? vagti ye notification be user miyad in baj ejra beshe*/}
                <View  style={{position:'absolute' ,width:8,height:8 ,borderRadius:4
                 ,backgroundColor:'red',top:20, marginLeft:100}}></View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    HeaderStyle :{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        height:60,
        backgroundColor:'orange'
    },
    headerIcon :{
        marginTop:20,
        marginLeft:20,
      
     
    },
    avatarStyle:{
        backgroundColor:'blue',
        marginTop:20,
        marginLeft:100,
        width:30,
        height:30,
        borderRadius:30

    }

 
});

export {HomeHeader}
