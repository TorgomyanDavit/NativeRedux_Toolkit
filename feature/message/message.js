import { StyleSheet,View,Text, Button } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { getHome } from "../../Request/appRequest/getRequest";
import { styles } from "./messageStyle";


export function Message() {
    const dispatch = useDispatch();
    const { message } = useSelector((state) => state.app);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{message}</Text>
            {/* <Text style={styles.text}>{"&excl;"}</Text> */}

            <Button
                onPress={() => {
                    dispatch(getHome())
                }}
                title="Change Message"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}

