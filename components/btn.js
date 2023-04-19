import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
const btn = (props) => {
    return (
        <View style = {styles.butn}>
            <Button title={props.title} onPress={props.onPress} />
        </View>
    );
}
const styles = StyleSheet.create({
    butn: {
        paddingVertical: 12,
        alignContent: 'center',
        justifyContent: 'center',
        width: 100,
        
        
    },
})
export default btn;