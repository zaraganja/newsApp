import React,{useEffect,useState} from "react";
import { View,Text,StatusBar } from "react-native";
import { set } from "react-native-reanimated";
import {HomeHeader,HomeBanner,HomeContent} from '../assets/components'

const HomeScreen =(props)=>{
    // const [data,setData]= useState();
    //  useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then((res)=> res.json())
    //     .then((data) => setData(data))
    //     // .then((data)=> console.log(data))
    // },[])

    
    return(
        <View style={{flex:1 ,backgroundColor:'#659EC7'}}>
            <StatusBar hidden={true}/>
            <HomeHeader {...props}/>
            {
                // console.log(data)
            }
            <HomeBanner/>
            <HomeContent/>
        </View>
        
    )
}
export {HomeScreen}