import { StyleSheet, Text, View, Image, Button} from 'react-native';
import { useState } from 'react';
import Header from './components/header.js'
import Home from './pages/home.js';
import Scheduler from './pages/scheduler.js';
import Btn from './components/btn.js';


export default function App() {
  const [content, setContent] = useState("Home");
  const [taskList, setTaskList] = useState([{name:'task', description:'description', date:"0/0/0", id:0}]);
  const navigateHandler = () => {
    if (content === "Home")
      setContent("Scheduler");
    else
      setContent("Home");
    return;
  }
  const switchHandler = () => {
    return content === "Home" ? "Scheduler" : "Home";
  }
  const deleteTask = (id) => {
      setTaskList(taskList.filter(task => task.id !== id));
      
  }
  return (
    <View style={styles.scrn}>
      <View style={styles.content}>
        <View style={styles.header}> 
          <Header title={content}/>
        </View>      
        <View style={styles.components}> 
          {content === "Home" ? <Home taskList={taskList} deleteTask={deleteTask}/> : <Scheduler taskList = {taskList} setTaskList={setTaskList}/>}
        </View> 
      </View>
      <View style={styles.footer}>
        <Btn onPress={navigateHandler} title={switchHandler()}/>
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  scrn: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'honeydew',
    display:'flex',
    flex:1
  },
  header: {
    height:100,    
    borderWidth: 10,
    borderRadius: 40,
    borderColor:"blue"
  },
  components: {
    minHeight:200,
    minWidth:"100%",
    flex:1,
    alignContent: 'center',
    alignItems: 'center',
  },
  content:{
    flex:1,
    alignContent: 'center',
    alignItems: 'center',
  },
  footer:{
    minHeight:100,
    justifyContent: 'flex-end',
  }
});
