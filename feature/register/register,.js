import { Component } from "react";
import { Text, TextInput, View,Keyboard, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./registerStyle"; 


export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"Register",
            description:"Register Page Description",
            nameValue:"",
            emailValue:"",
            passwordValue:""
        }
    }



    render() {
        const {title,description,nameValue,emailValue,passwordValue} = this.state
        const {navigation,route} = this.props
        const {prevPath} = this.props.route.params


        return (
            <ScrollView keyboardShouldPersistTaps="handled">
                <Text style={styles.title}>{prevPath}</Text>
                <TextInput
                    // secureTextEntry={textInputValue.passwordLock ? true : false}
                    style={ [styles.inputs]  }
                    value={ nameValue }
                    // editable={textInputValue.passwordLock ? false : true}
                    onChangeText={(value) => { this.setState({ nameValue:value })} }
                    placeholder="Name"
                />
                <TextInput
                    // secureTextEntry={textInputValue.passwordLock ? true : false}
                    style={ [styles.inputs]  }
                    value={ emailValue }
                    // editable={textInputValue.passwordLock ? false : true}
                    onChangeText={(value) => { this.setState({ emailValue:value })} }
                    placeholder="Email"
                />
                <TextInput
                    // secureTextEntry={textInputValue.passwordLock ? true : false}
                    style={ [styles.inputs]  }
                    value={ passwordValue }
                    // editable={textInputValue.passwordLock ? false : true}
                    onChangeText={(value) => { this.setState({ passwordValue:value })} }
                    placeholder="Password"
                />

                <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Message")}>
                    <Text style={styles.loginButtonText}>Register</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}
