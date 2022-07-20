import React from "react";
import { View, StyleSheet, Text } from "react-native";
const header = () => {
    return (
        <View>
            <Text style={{fontSize: 50}}>
                Ez Grade Aid OP APP
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    heading: {
        paddingVertical: 100,
        alignContent: 'center'
        
    },
})
export default header;