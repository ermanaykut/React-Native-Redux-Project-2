import { StyleSheet, Text, View } from 'react-native'


export const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: 'cyan',
    },

    secondContainer:{

        alignItems:'center',
        justifyContent:'center',
        flex:1,

    },

    titleContainer:{

        alignItems:'center',
        justifyContent:'center',
      

    },
    title:{
        marginTop:10,
        fontSize: 20,
        fontWeight:'bold',

    },
    text:{
        fontSize: 18,
        fontWeight:'400',

    },

    inputContainer:{
       
        width: 300,
        height: 50,
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 20,
        padding:15,
        borderRadius:12,
        shadowOpacity:0.7,
        

    },
    inputContainer2:{
        
        width: 300,
        height: 50,
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 15,
        marginBottom:20,
        padding:15,
        borderRadius:12,
        shadowOpacity:0.7,

    },


    buttonContainer:{

        backgroundColor:'lightgrey',
        marginTop:22,
        shadowOpacity:0.8,
        borderRadius:12,
        borderWidth:1,
        borderColor:'white'

    },

    imageContainer:{

        width:40,
        height:40,
        shadowOpacity:1,
        marginTop:15,


    }







})