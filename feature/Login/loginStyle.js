import {Platform, StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    inputs:{
        borderColor:"#4a372f",
        borderWidth:2,
        color:"#051b34",
        paddingLeft:10,
        fontSize:18,
        fontStyle:"italic",
        marginBottom:15,
        width:"80%",
        marginLeft:"auto",
        marginRight:"auto",
        borderRadius:10
    },
    title:{
        textAlign:"center",
        padding:10,
        color:"#051b34",
        fontSize:18,
    },
    loginButton:{
        width:"60%",
        borderRadius:20,
        height:50,
        backgroundColor:"#7e57c2",
        marginLeft:"auto",
        marginRight:"auto",
        justifyContent:"center",
        alignItems:"center"
    },
    loginButtonText:{
        color:"white",
        fontSize:20,
        fontStyle:"italic"
    }
})