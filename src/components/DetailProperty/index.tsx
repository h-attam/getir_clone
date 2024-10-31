import React,{useState} from 'react';
import {View,Text} from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
function index() {
    const [details,setDetails] = useState<string[]>(
        ["Sütlü kıtır çikolata ve badem parçacıklarıyla kaplı vanilya lezzeti","İçindekiler","Besin Değerleri","Kullanım","Ek Bilgileri"]
    )
    const TextComponent = ({detail, index}:{detail:string,index:number}) => {
        return (
            <View style={{
                paddingVertical:13,
                borderBottomWidth:index === details.length -1 ? 0 : 0.4,
                borderBottomColor:"lightgray", flexDirection:"row",alignItems:"center",justifyContent:"space-between"
            }}>
                <Text style={{color:index ===0 ? "black" : "#687482",fontSize:index ===0 ? 14 : 17,fontWeight:index ===0 ? "600" :"700"}}>{detail}</Text>
                {index != 0 && <Entypo name="chevron-down" size={24} color="#9f9f9f" />}
            </View>
        )
    }
  return (
    <View style={{backgroundColor:"white",paddingHorizontal:20,paddingVertical:8}}>
        {details.map((item,index) =>(
            <TextComponent key={index} index={index} detail={item} />
        ))}
    </View>
  )
}

export default index