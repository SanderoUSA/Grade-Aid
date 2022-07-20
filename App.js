import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header.js'
export default function App() {
  return (
    <View style={styles.heading}>
      <Header/> 
            
      
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    paddingVertical: 100,
    alignItems: 'center',
    
    
},
});
