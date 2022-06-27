import { Component } from "react";
import { Text, TextInput, View,Keyboard, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { styles } from "./loginStyle"; 


export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"Login",
            description:"Login Page Description",
            emailValue:"",
            passwordValue:""

        }
    }



    render() {
        const {title,description,passwordValue,emailValue} = this.state
        const {prevPath} = this.props.route.params
        const {app} = this.props


        return (
            <ScrollView keyboardShouldPersistTaps="handled">
            
                <Text style={styles.title}>{prevPath}</Text>
                <TextInput
                    // secureTextEntry={textInputValue.passwordLock ? true : false}
                    style={ [styles.inputs]  }
                    value={ emailValue }
                    // editable={textInputValue.passwordLock ? false : true}
                    onChangeText={(value) => { this.setState({ emailValue:value })} }
                    placeholder="Email"
                />
                <TextInput
                    secureTextEntry={true}
                    style={ [styles.inputs]  }
                    value={ passwordValue }
                    // editable={textInputValue.passwordLock ? false : true}
                    onChangeText={(value) => { this.setState({ passwordValue:value })} }
                    placeholder="Password"
                />

                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>{app.message}</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}


const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(Login);







// {
//     dispatch({ type:"userData",payload:{
//         ...textInputValue,
//         password:value,
//     }});
//     setrefresh(!refresh)
// }}