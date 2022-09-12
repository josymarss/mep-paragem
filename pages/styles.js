import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    header:{
        backgroundColor:'#232323',
        top:24,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"flex-end",
        padding:20,
        height:60   
    },
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    
    search:{
        padding:8,
        marginTop:35,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FFFFFF'
    },
    textInput:{
        borderWidth:1,
        height:50,
        borderColor:"#E8E8E8",
        padding:10,
        width:'80%',
        textAlign:"center"
    },
    searchButton:{
        height:50,
        backgroundColor:'#336CFF',
        width:"20%",
        padding:10,
        borderWidth:1,
        borderColor:'#336CFF',
        alignItems:'center',
        justifyContent:'center'
    },
    
   
    button:{
        marginTop:8,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        width:'90%',
        backgroundColor:'#020202',
        borderRadius:3,
        color:'white',
        padding:14,
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        marginLeft:8,
        padding:10
    }
});
export default styles;