import React from 'react'
import {View,Text,Dimensions,TouchableOpacity} from "react-native";

const {width, height} = Dimensions.get("window");

function index() {
  return (
    <TouchableOpacity style={{width:"100%" ,height:height *0.1,marginTop:40,backgroundColor:"white"}}>
       <View style={{alignItems: "center",justifyContent:"center",backgroundColor:"#5D39C1",height:height*0.06,width:"90%",marginHorizontal:"5%",borderRadius:8}}>
       <Text style={{fontWeight:"bold",color:"white",fontSize:15}}>Sepete Ekle</Text>
       </View>
    </TouchableOpacity>
  )
}

export default index