import {View, Text, TouchableOpacity,Image, Button} from 'react-native';
import Checkbox from 'expo-checkbox';

import styles from './styles';


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

export default Card;