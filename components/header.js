import React from "react";
import { View, StyleSheet, Text } from "react-native";
const header = (props) => {
    return (
        <View style={styles.heading}>
            <Text style={{fontSize: 50}}>
                {props.title}
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    heading: {
        height: "100%",
        minWidth: "100%",
        backgroundColor: 'lemonchiffon',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
})
export default header;