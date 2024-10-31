import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions, Image, Text, TouchableOpacity,View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import ProductDetailScreen from "../screens/ProductDetailsScreen";
import { Ionicons, Foundation } from "@expo/vector-icons";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from "@react-navigation/native";
import logo from "../../assets/logo";
import CartScreen from "../screens/CartScreen";


const {width,height} = Dimensions.get("window")

const Stack = createStackNavigator();

function MyStack({ navigation, route }) {
  const tabHiddenRoutes = ["ProductDetails", "CartScreen"];
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(routeName)) {
      console.log("Kapat ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      console.log("Aç ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "true" } });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Image
              resizeMode="contain"
              style={{ width: 70, height: 30 }}
              source={require("../../assets/logo")}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Ürünler
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("CartScreen")}
              style={{ width:width*0.22,height:33,backgroundColor:"white",marginRight:width*0.03,borderRadius:9,flexDirection:"row",alignItems:"center"}}>
                <Image style={{width:23,height:23,marginLeft:6}} source={require("../../assets/cart.png")}/>
                <View style={{flex:1,justifyContent:"center",alignItems:"center",height:33,backgroundColor:"#F3EFFE",borderTopRightRadius:9,borderBottomRightRadius:9}}></View>
                <Text style={{width:"55%",color:"#5D3EBD",fontWeight:"bold"}}>
                  <Text>{"\u20BA"}</Text>34,95
                </Text>
              </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailScreen}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingLeft: 8 }}
            >
              <Ionicons
                style={{ marginLeft: 8 }}
                name="close"
                size={26}
                color="white"
              />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 15 }}>
              Ürün Detayı
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 10 }}>
              <Foundation
                style={{ marginRight: 8 }}
                name="heart"
                size={26}
                color="#32177a"
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen 
      name="CartScreen"
      component={CartScreen} 
      options={{
        headerTitleAlign:"center",
        headerTintColor:"white",
        headerStyle:{backgroundColor:"#5C3EBC"},
        headerTitle:() => (
          <Text style={{fontWeight:"bold",fontSize:15,color:"white"}}>Sepetim</Text>
        ),
        headerLeft:() => (
          <TouchableOpacity style={{paddingLeft:10}} onPress={() => navigation.goBack()}>
            <Ionicons name="close" size={26} color="white" />
          </TouchableOpacity>
        ),
        headerRight:() => (
          <TouchableOpacity style={{paddingRight:10}}>
            <Ionicons name="trash" size={26} color="white" />
          </TouchableOpacity>
        )
      }}    
      
      
      />




    </Stack.Navigator>
  );
}

export default function HomeNavigator({ navigation, route }) {
  return <MyStack navigation={navigation} route={route} />;
}