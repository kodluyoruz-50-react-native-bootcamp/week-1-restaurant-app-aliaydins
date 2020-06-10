import React from 'react'
import {SafeAreaView,Text,View,FlatList} from 'react-native'

import {ListItem,Data} from './components'
const Main =()=>{
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
               <FlatList
                    keyExtractor={(item, index)=>index.toString()}
                    data={Data}
                    renderItem={({item})=>
                    <ListItem
                     dataName={item.name}
                     dataImage={item.image}
                     dataLocation={item.location}
                     dataLikes={item.likes}
                     dataIsPopular={item.isPopular}
                    />}
               />
            </View>
        </SafeAreaView>
    )
}

export {Main}