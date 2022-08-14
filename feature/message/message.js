import { StyleSheet,View,Text, Button } from "react-native";
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import * as Permission from 'expo-permissions';

import { useDispatch, useSelector } from 'react-redux';
import { getHome } from "../../Request/appRequest/getRequest";
import { styles } from "./messageStyle";
import { useEffect } from "react";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
      allowAnnouncements: false,
    }),
});

export function Message() {
    const dispatch = useDispatch();
    const { message } = useSelector((state) => state.app);


    useEffect(() => {
        registerForPushNotificationsAsync()
    }, [])

    async function registerForPushNotificationsAsync() {
        console.log(Device);

        const {status} = await Permission.askAsync(Permission.NOTIFICATIONS);
        console.log(status);
        if(status != "granted") {
            const {status} = await Permission.askAsync(Permission.NOTIFICATIONS)
        }

        if(status != "granted") {
            alert("Fail to get the push token");return;
        }

        let token = await Notifications.getExpoPushTokenAsync()
        console.log(token);
    }







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

