import { Component } from "react";
import { ScrollView, Text, TouchableOpacity, View, Animated } from "react-native";
import { styles } from "./homeStyle";
import { setMessage } from "../../store/appSlices";
import { connect } from "react-redux";



export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title:"Good Sites",
            fade:new Animated.Value(0),
            spin:new Animated.Value(0),
        }

    }

    componentDidMount() {
        console.log("mounted");
        Animated.timing(this.state.fade,{
            toValue:5,
            duration:5000, 
            useNativeDriver: true 
        }).start()

        Animated.timing(this.state.spin,{
            toValue:1,
            duration:8000,
            useNativeDriver:true
        }).start()
    }
    

    render() {
        const {title,fade,spin} = this.state
        const {navigation,route,app} = this.props
        const SpinValue =  spin.interpolate ({
            inputRange :  [ 0, 1 ],
            outputRange :  [ '0deg', '360deg' ]
        })

        console.log(this.props);
        return (
            <ScrollView style={{flex:1}}>
                <Text style={styles.title}>{title}</Text>
                <Animated.Image
                    style= { {marginTop:5,height:200,width:200,marginLeft:"auto",marginRight:"auto",opacity:fade } }
                    source= { { uri: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80" } }>
                </Animated.Image>

                <View>
                    <TouchableOpacity style={styles.navButton} 
                        onPress={() => navigation.navigate("Login",{prevPath:"previous path Home Page"})}
                    > 
                        <Text style={styles.navButtonText}>Login</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navButton} 
                        onPress={() => navigation.navigate("Register",{prevPath:"Home Page"})}
                    > 
                        <Text style={styles.navButtonText}>Register</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navButton} 
                        onPress={() => this.props.setMessage("armenchik")}
                    > 
                        <Text style={styles.navButtonText}>Change Initial Message</Text> 
                    </TouchableOpacity>
                </View>

                <Animated.Image
                    style={{height:150,width:180,marginTop:8,borderRadius:20,marginLeft:"auto",marginRight:"auto",transform:[{rotate:SpinValue}]}} 
                    source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWWKC1c5mJ8oGrzdK6mRcUINeNUCNZpPdPxA&usqp=CAU" }}>
                </Animated.Image>
            </ScrollView>
        )
    }
}


const mapStateToProps = (state) => (state);

export default connect(mapStateToProps,{ setMessage })(Home);