import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Component } from "react";
import  {Message}  from "./feature/message/message";
import  Login  from "./feature/Login/login";
import { Register } from "./feature/register/register,";
import  Home  from "./feature/home/home";
const Stack = createStackNavigator();


export default function NavigateStack() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home" 
                    component={ Home } 
                    options={{headerShown:true,tabSize: 50}} 
                />
                <Stack.Screen 
                    name="Register" 
                    component={ Register } 
                    options={{headerShown:true,tabSize: 50}} 
                />
                <Stack.Screen 
                    name="Login" 
                    component={ Login } 
                    options={{headerShown:true,tabSize: 50}} 
                />
                <Stack.Screen 
                    name="Message" 
                    component={ Message } 
                    options={{headerShown:true,tabSize: 50}} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
        
    

