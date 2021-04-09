import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState, useEffect } from 'react';
import { Button, 
    Keyboard,
    KeyboardAvoidingView, 
    Platform,
    StyleSheet, 
    Text, 
    TouchableWithoutFeedback, 
    TouchableOpacity, 
    TextInput, 
    View } from 'react-native';

var myTimer;
function timerStart(string){
  //const hours = string.split(':');
  //const minutes = string.split(':');
  myTimer = setInterval(myClock, 1000);
  var c = string;
  
  function myClock(){
    c--;
    if(c == 0){
      clearInterval(myTimer);
      alert("Timer Completed");
    }
  }

  //while(string>0){
  //  alert(string)
  //  string = string-1;
  //}
  

  //alert(string)
 
  
  
  
}

export default function App(){
  //const [text, setText] = useState('')
  /*constructor(props){
    super(props);

    this.state = {
      buttonText: '#e6efbf',
      inHours: 0,
      inMins: 0,
      inSecs: 0,
      timer: 3, //change after testing
      //timerStatus: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);

    
  }*/
  

  /*componentDidMount(){
    this.fetchData();
    this.interval = setInterval(
      () => this.setState((prevState)=> ({timer: prevState.timer -1})),
      1000
    );
  }

  fetchData = async () => {
    const a = await this.timerStart;
  }
  componentDidUpdate(){
    if(this.state.timer === 1){
      clearInterval(this.interval);
      alert("Timer Done!")
    }
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  timerStart = (props) =>{
    //const [timerCount, setTimer] = useState(60)
    alert("Timer has started!")
    //return(3);
    
  }
  ShowHideTextComponentView = () =>{
    if(this.state.status == true){
      this.setState({timerStatus: false})
    }
    else{
      this.setState({timerStatus: true})
    }
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.type === target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }
  
  onStartPress = () => {
    //this.setState({ buttonText: '#faac64'})
    alert("Water Flow has begun")
  }
  onEndPress = () => {
    //this.setState({ buttonT})
    alert("Water Flow has stopped")
  }*/
   
    const [text, setText] = useState('');
    return (
      <KeyboardAvoidingView 
        behavior = {Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}>
          
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <Text style = {styles.title}>
              Water Controls
            </Text>
            <Text style={styles.subTitle}>Water Flow</Text>
            <View style={{ flexDirection:"row"}}>
              <View style={styles.button}>
                <Button 
                  title = "Start"  
                  color= "#e6efbf"
                  onPress={() => alert("Water Flow has begun")}/>
              </View>
              <View style={styles.button}>
                <Button 
                  title  = "Stop" 
                  color="#e6efbf"
                  onPress={() => alert("Water Flow has ended")}/>
              </View>
            </View>
            <View style={{flexDirection: "row"}}>
              <Text style={styles.subTitle}>Timer</Text>
              {/*<Text>{this.state.timer}</Text>*/}
              </View>
              
            <View style={{ flexDirection: "row"}}>
              <TextInput 
                placeholder="00:00:00" 
                style={styles.textInput}  
                //name = "inHours"
                //type = "number"
                //value={this.state.inHours}
                id = "demo"
                onChangeText={text => setText(text)}
                onSubmitEditing={ () => timerStart(text)}
                returnKeyType={'done'}
                defaultValue = {text}
              />
              {/*<Text style={styles.regText}>hrs</Text>
              <TextInput placeholder="00" 
                style={styles.textInput} 
                //name = "inMinutes"
                //type = "number"
                //value={this.state.inMinutes}
                //onChange={this.handleInputChange}
                />
              <Text style={styles.regText}>mins</Text>
              <TextInput placeholder="00" 
                style={styles.textInput} 
                //name="inSecs"
                //type="number"
                //value={this.state.inSecs}
                //onChange={this.handleInputChange}
                />
              <Text style={styles.regText}>secs</Text>*/} 
              <View style={styles.button}>
                <Button title="Start" color="#e6efbf"  />
              </View>
            </View>
              
            
            
            
            <StatusBar style="auto" />
          </View>
        </TouchableWithoutFeedback>

      </KeyboardAvoidingView>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6efbf',
    //padding: 24,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  title: {
    //marginTop: 16,
    marginBottom: 5,
    paddingVertical: 60,
    //borderWidth: 4,
    //borderColor: '#20232a',
    backgroundColor: '#4ac3be',
    color: '#e6efbf',
    textAlign: 'left',
    //position: 'absolute',
    //width: 269,
    //height: 54,
    //left: 26,
   // top: 108,
    fontSize: 48, 
    fontWeight: 'normal',
  },
  subTitle: {
    color: '#4ac3be',
    fontSize: 36,
    marginHorizontal: 5,
    //marginBottom: 0.5,
  },
  button: {
    backgroundColor: '#a3dec9',
    //padding: 20,
    width: 150,
    borderRadius: 15,
    marginBottom: 0,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  inner: {
    //padding: 10,
    flex: 1,
    justifyContent: 'space-around',
  },
  textInput: {
    height: 40,
    width: 150,
    fontSize: 35,
    borderColor: '#000000',
    borderWidth: 1,
    marginBottom: 0,
    marginHorizontal: 5
  },
  regText: {
    color: '#4ac3be',
    fontSize: 20,
    marginHorizontal: 10
  },
});
