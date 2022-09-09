import { useState, useEffect } from 'react';
import { StyleSheet, Text, View,TextInput,Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import Ionicons from '@expo/vector-icons/FontAwesome5';
import data from '../utils/usersdata';

import styles from './styles';

export default function Main({ navigation }){

    useEffect(() =>{
        RenderWorkers();
    },[workers]);
    useEffect(() => {
        RenderWorkers()
    },[controlCheck]);

    const [value, onChangeSearch] = useState();
    const [workers, setWorkers] = useState(data);
    const [controlCheck, setControlCheck] = useState();
    
    const [message, setMessageState] = useState(false);

    function goToDriving(){
        const updatedWorkers = workers.filter(user => user.state != false);
        updatedWorkers.length > 0 ? navigation.navigate('Driving',{updatedWorkers}) : alert('Tem de ter ao menos um passageiro para seguir viagem!');
    }

    function onLostFocus(){}

    function searchUser(){
        const result = workers.filter(work => work.name.includes(value));
        if(result == []){
            setMessageState(true);
            setWorkers(data);
        }else{
            setWorkers(result);
            setMessageState(false);
        }
        
    }
    function setChecked(id){
        // change the user state
        workers.map(user => {
            if(user.id === id){
                user.state = !user.state;
            }
        });
        //change the values 
        setWorkers([...workers]);
        //update workers
        //send to driving 
    }

    function Card({name, avatar, phoneNumber, state,id}) {
        
        return(
            <View style={styles.body}>
                <View style={styles.userInfo}>
                    <Image style={styles.avatar} source={avatar}/>
                    <View>
                        <Text style={styles.username}>{name}</Text>
                        <Text style={styles.number}>{phoneNumber}</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Checkbox style={styles.checkbox} value={state} onValueChange={() => { setChecked(id) } } />
                </TouchableOpacity>
            </View>
        );
    }

    function RenderWorkers(){
        return(
            <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Ionicons 
                        name="map-marker-alt" size={20} 
                        color="white" style={{marginRight:28}} 
                        onPress={navigation.navigate('Routes')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="user-plus" size={20} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.search}>
                    <TextInput style={styles.textInput}
                        placeholder='PESQUISAR' 
                        value={value} 
                        onChangeText={onChangeSearch}
                        onBlur={onLostFocus}                    
                    />
                    <View style={styles.searchButton}>
                        <TouchableOpacity onPress={searchUser}>
                            <Ionicons name="search" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
            </View>
            {message ? <Text style={{ color:'tomato', textAlign:'center' }}> Nenhuma usuário encontrado!</Text> :''}
            <ScrollView style={{marginBottom:8, backgroundColor:'#FFFFFF'}}>
                {workers.map((user,index) => 
                    <Card key={index} 
                        name={user.name} 
                        avatar={user.avatar} 
                        phoneNumber={user.phoneNumber}
                        state={user.state}
                        id={user.id}
                    />)
                }
                {workers.length > 0 ? 
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={goToDriving}>
                    <Text style={{color:'white',fontWeight:'semibold',textAlign:'center',fontSize:18}}>Confirmar</Text>
                </TouchableOpacity> : ''} 
            </ScrollView>
           
        </View>
        );
    }

    


    return(
        <RenderWorkers />
    );
} 