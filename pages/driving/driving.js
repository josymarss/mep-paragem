import { useState, useEffect } from 'react';
import {StyleSheet, View, Text,Image, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Ionicons from '@expo/vector-icons/FontAwesome5';

import SendMessage from '../../utils/sendmessages';

export default function Drivig({ navigation,route }){
    const { updatedWorkers } = route.params;
    const [actualPassenger, setPassenger] = useState(0);

    useEffect(() => {
        RenderPassenger();
    },[actualPassenger]);

    async function onNext(){
        if(actualPassenger +1 < updatedWorkers.length){
            setPassenger(actualPassenger+1);
            // await SendMessage(workers[actualPassenger].phoneNumber); 
        }else{
            alert(updatedWorkers[actualPassenger].name+' é o último passageiro!');
        }
        
    }  

    function RenderPassenger(){
        return(
            <LinearGradient colors={['#9773FF','#0498D8']} style={styles.background}>
                <View style={styles.container}>
                    <TouchableOpacity style={{padding:4,marginLeft:8,alignSelf:'flex-start'}}>
                        <Ionicons name="arrow-left" size={20} color="white" onPress={() => navigation.navigate('Main')}/>
                    </TouchableOpacity>
                    <Image style={styles.avatar} source={updatedWorkers[actualPassenger].avatar} />
                    <Text style={styles.username}>{updatedWorkers[actualPassenger].name}</Text>
                    <Ionicons name="map-marker-alt" size={50} color="black" />
                    <Text style={styles.description}>{`"${updatedWorkers[actualPassenger].destination}"`}</Text>
                    
                    <TouchableOpacity style={styles.next}>
                        <Text style={styles.nexttext} onPress={onNext}>Próximo</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        );
    }

    return(
        <RenderPassenger />
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        marginTop:20,
    },
    container:{
        flex:1,
        padding:13,
        marginTop:20,
        alignItems:'center'
    },
    avatar:{
        width:200,
        height:200,
        borderRadius:100
    },
    username:{
        marginBottom:14,
        textAlign:'center',
        fontSize:25,
        fontWeight:'boold',
        color:'white'
    },
    description:{
        marginTop:10,
        fontSize:28,
        textAlign:'center',
        color:'white'
    },
    next:{
        width:200,
        marginTop:10,
        borderWidth:2,
        borderColor:'#6A91F4',
        padding:14,
        borderRadius:100,
        justifySelf:'flex-end',
    },
    nexttext:{
        color:'white',
        textAlign:'center',
    }
})