import React, { useRef, useState, useEffect } from "react";
import { View, StatusBar, FlatList, Dimensions, Animated, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Text, Card } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { dataArray } from "../../config/Data";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from "axios";

// animated va useref mokammele haman

// abaade screen ro migire ta ba estefade az una mahal va andazeye banner ro moshakhas kone
const { width, height } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = height * 0.4;


const HomeBanner = () => {

    // scroll be surate x harekat kone
    const scrollX = useRef(new Animated.Value(0)).current;

    //axios
    useEffect(() => {
        axios({
            baseURL: 'https://jsonplaceholder.typicode.com/',
            url: '/posts',
            method: 'GET',
            responseType: 'json',
            timeout: 5000,
            params: {
                name: 'ZARA'
            },
            headers: {
                token: 'AFGS6838JJENCLEJD'
            },
            responseEncoding: 'utf8',
            validateStatus: function (status) {
                return status >= 200 && status < 300;
            },
            // transformRequest: [(data) => {
            //     data.push({
            //         username: "Frazad"
            //     })
            //     console.log(data)
            //     return data
            // }],
            // data: [{ username: "zara ganji" }]
        })
            .then((res) => console.log(res))
            .then((err) => console.log(err))

    })


    return (
        <View >
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                data={dataArray}
                keyExtractor={item => item.id}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
                // harkudum azun axhaye bozorg (sliderha) yek index daran. inja moshakhs mikonim che aksi aval neshun dade besheva
                // va az koja ta koja neshun dade beshe
                // in renderitem yek intropolate hast
                renderItem={({ item, index }) => {
                    const inputRange = [
                        // ax vasatiye ro aval biyare
                        (index - 1) * width,
                        // inja markaziyate slide ro mikhaym moshakhas konim
                        (index * width),
                        // chon mikhaym be chap scroll konim
                        (index + 1) * width
                    ]
                    const translateX = scrollX.interpolate({
                        inputRange,
                        outputRange: [-width * 0.7, 0, width * 0.7]
                    })
                    return (
                        <View style={{ width, justifyContent: 'center', alignItems: 'center', }}>
                            <TouchableOpacity
                                activeScale={0.9}
                                tension={50}
                                friction={7}
                                useNativeDriver
                            >
                                <View style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT, overflow: 'hidden', alignItems: 'center', marginTop: 20, borderRadius: 18 }}>
                                    {/* card.cover to show cover image inside a card 
                                <Card.Cover style={{ width:width - 90 , height:height-400, marginRight:20} } source={item.url}/> */}
                                    <Animated.Image style={{ width: ITEM_WIDTH * 1.4, height: ITEM_HEIGHT, resizeMode: 'cover', transform: [{ translateX }] }} source={item.url} />
                                    <View style={styles.DarkOverly}></View>
                                    <View style={{ flexDirection: 'column', position: 'absolute', bottom: 10, marginLeft: 15 }}>
                                        <Text style={styles.headerCoverText}>{item.title}</Text>
                                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Ionicons name="time-outline" size={14} color="#333" color="#fff" style={{ opacity: 0.5 }} />
                                                <Text style={styles.headerCoverItem}>50m ago</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30 }}>
                                                <MaterialCommunityIcons name="message-text-outline" size={13} color="#fff" style={{ opacity: 0.5 }} />
                                                <Text style={styles.headerCoverItem}>68 comments</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                            </TouchableOpacity>
                        </View>
                    )
                }}



            >

            </FlatList>
        </View>

    )
}

const styles = StyleSheet.create({
    DarkOverly: {
        position: 'absolute',
        width: ITEM_WIDTH * 1.4,
        height: ITEM_HEIGHT,
        borderRadius: 20,
        marginRight: 20,
        backgroundColor: '#000',
        opacity: 0.3
    },

    headerCoverText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 20,
        color: '#fff'
    },

    headerCoverItem: {
        opacity: 0.9,
        fontSize: 12,
        marginLeft: 3,
        color: '#fff'
    }
})

export { HomeBanner }