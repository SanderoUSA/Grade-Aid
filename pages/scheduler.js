import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import Btn from '../components/btn.js';
import { useState } from 'react';
const scheduler = (props) => {
    const [id, setID] = useState(1);
    const [name, setName] = useState("Task");
    const [description, setDescription] = useState("Description");
    const [date, setDate] = useState("0/0/0");
    const createTask = () => {
        const task = {name:name, description:description,date:date,id:id};
        props.setTaskList([...props.taskList, task]);
        setName("Task");
        setDescription("Description");
        setDate("0/0/0");
        setID(id+1);       
       
    }
    return (
        <View style={styles.field}>
            <Text style={styles.headerText}> Create a Task:</Text>
            <Text> Enter a name for the task</Text>
            <TextInput style={styles.input} onChangeText={(val)=>{setName(val)}}/>
            
            <Text> Enter a description for the task</Text>
            <TextInput style={styles.input} onChangeText={(val)=>{setDescription(val)}}/>
            
            <Text> Enter a date for the task</Text>
            <TextInput style={styles.input} onChangeText={(val)=>{setDate(val)}}/>
            <Btn onPress={()=> {createTask()}} title={"Create a Task"}/>
        </View>
    );
}
const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
        
        
    },
    field:{
        borderWidth:4,
        width:400,
        flex:4,
        alignItems:'center'
        
    },
    input: {
        borderWidth: 2,
        padding:8,
        margin:10,
        width:200
    }
})
export default scheduler;