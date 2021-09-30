import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const Dev_Height = Dimensions.get('window').height;
const Dev_Width = Dimensions.get('window').width;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.arrowView}>
          <Icon
            name="arrowleft"
            size={30}
            color="#324e7f"
            style={styles.arrowstyle}
          />
        </View>
        <View style={styles.textview}>
          <Text style={styles.textstyle}>Enter OTP</Text>
          <Text style={styles.headername}>sent to 6382658391</Text>
        </View>
        <View style={styles.otpmainview}>
          <View style={styles.otpbox}></View>
          <View style={styles.otpbox}></View>
          <View style={styles.otpbox}></View>
          <View style={styles.otpbox}></View>
        </View>
        <View style={styles.confirmation}>
          <Text style={styles.confirmationstyle}>
            Resend OTP in <Text style={{...styles.confirmationstyle,color:"#91d18b"}}> 30 secs</Text>
          </Text>
        </View>
        <View style={styles.buttonmainview}>
        <TouchableOpacity style={styles.touchable}>
        <Text style={styles.buttontouch}>Verify
        </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: Dev_Height,
    width: Dev_Width,
  },
  arrowView: {
    height: '10%',
    width: '100%',
    justifyContent: 'center',
  },
  arrowstyle: {
    marginLeft: '5%',
  },
  textview: {
    height: '20%',
    width: '100%',
  },
  textstyle: {
    fontsize: 18,
    fontWeight: '400',
    lineHeight: 27,
    color: '#324E7E',
    marginLeft: '5%',
  },
  headername: {
    fontSize: 22,
    lineHeight: 33,
    color: '#324E7E',
    fontWeight: '700',
    marginLeft: '5%',
  },
  otpmainview: {
    height: '25%',
    width: '100%',
    flexDirection: 'row',
  },
  otpbox: {
    height: '60%',
    width: '20%',
    marginLeft: '4%',
    borderRadius: 10,
    backgroundColor: '#f0f5f9',
  },
  confirmation: {
    height: '10%',
    width: '100%',
    justifyContent: 'center',
  },
  confirmationstyle: {
    marginLeft: '5%',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    color: '#324E7E',
  },
  buttonmainview:{
    height:"15%",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"27%"
  },
  touchable:{
    height:"80%",
    width:"90%",
    borderRadius:10,
    backgroundColor:"#324E7E",
    justifyContent:"center",
    alignItems:"center",
  },
  buttontouch:{
    fontSize:16,
    lineHeight:24,
    fontWeight:"700",
    color:"white"
  }

});
