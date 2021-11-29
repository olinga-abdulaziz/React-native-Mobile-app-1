import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View ,TextInput, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
export default function App() {
  const[me,setMe]=useState("i am waiting")
  const[name,setName]=useState("")
  const[people,setPeople]=useState([
    { name: 'dula',key:'1'},
    { name: 'dula1',key:'11'},
    { name: 'dula3',key:'21'},
    { name: 'dula4',key:'3'},
    { name: 'dula5',key:'4'},
    { name: 'dula6',key:'5'},
    { name: 'dula7',key:'6'},
    { name: 'dula8',key:'7'},
    { name: 'dula8',key:'8'},
    { name: 'dula9',key:'9'},
    { name: 'dula10',key:'01'},
  ])
  const stateHandler =()=>{
    setMe("dulaa guruu mmm")
  }
  const textHandler =(e)=>{
    setName(e.target.value)
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.txt2}>{me}</Text>
        <View style={styles.btnContainer}>
        <Button style={styles.btn} title="update state" onPress={stateHandler}></Button>
        </View>
        
      </View>

      <View style={styles.body}>
        <TextInput style={styles.input} onChange={textHandler} placeholder='Enter your name ...' />

        <View><Text style={styles.hisdata}>Your anme is {name}</Text>
        </View>

        <FlatList 
        data={people}
        renderItem={({person})=>(
          <Text style={styles.li}>wooiyii</Text>
        )}

         />


      {/* <ScrollView>
          {people.map(person=>(
            <View style={styles.li} key={person.key}>
                <Text style={styles.p}>{person.name}</Text>
            </View>
          ))}
      </ScrollView> */}
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  txt2:{
    color:'white'
  },
  topView:{
    color:'#fff',
    padding:40,
    backgroundColor: '#003',
    width:'auto',
    marginTop:40,
    height:200,
  },
  btnContainer:{
    width:200,
    marginTop:20,
  },
  input:{
    
      width:200,
      borderWidth:1,
      margin:20,
      padding:7,

  },
  hisdata:{
    marginLeft:20,
  },
  li:{
    width:360,
    padding:20,
    color:'#fff',
    marginLeft:20,
    backgroundColor:'#0032',
    marginBottom:10,
    
  }
  
});
