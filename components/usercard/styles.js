import { StyleSheet } from 'react-native';

const stylesCard = StyleSheet.create({
    body:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:8,
        borderBottomWidth:1,
        borderBottomColor:"#F5F5F5",
    },
    avatar:{
        width:60,
        height:60,
        borderRadius:100
    },
    userInfo:{
        flexDirection:'row',
        alignItems:'center'
    },
    username:{
        fontSize:18,
        fontWeight:"semibold",
        marginLeft:10
    },
    number:{
        fontSize:14,
        marginLeft:10,
        color:"gray"
    },
    chekbox:{
        margin: 16, 
        border:1,
     },
     
})

export default stylesCard;
