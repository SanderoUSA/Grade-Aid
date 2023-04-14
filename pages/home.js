import React from "react";
import { View, StyleSheet, Text, Button, ScrollView } from "react-native";
import Btn from "../components/btn.js";
const home = (props) => {

    return (
        <View style={styles.scrn}>
            <View>
                <Text style={styles.headerText}>
                    Tasks:
                </Text>
                <ScrollView style={styles.taskContainer}>
                    {props.taskList.map(task => (
                    <View style={styles.task}>
                        <Btn title={"Delete Task"} onPress={() => {props.deleteTask(task.id)}}/> 
                        <Text >{task.name}</Text>
                        <Text >{task.description}</Text>
                        <Text >{task.date}</Text>
                    </View>
                ))}
                </ScrollView>
                
                
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    headerText: {
        fontSize: 30
    },
    scrn: {
        
    },
    task:{
        width:200,
        borderWidth:1,
        padding:10,
        alignItems:'center'
    },
    taskContainer:{
        
    }
})
export default home;