import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { Product } from "../../models";

type CartItemProps = {
  product: Product;
};
const { width, height } = Dimensions.get("window");
function index({ product }: CartItemProps) {
  return (
    <View style={{width:"100%",backgroundColor:"white"}}>
      <View
        style={{
          borderBottomWidth: 0.4,
          width: width*0.92,
          marginHorizontal:width*0.04,
          borderBottomColor: "lightgrey",
          height: height * 0.13,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: width * 0.04,
          backgroundColor: "white",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ height: height * 0.09, width: height * 0.09 }}
            source={{ uri: product.image }}
          />
          <View style={{ marginLeft: 8 }}>
            <Text style={{ fontSize: 13, fontWeight: "600" }}>
              {product.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginTop: 3,
                color: "#848897",
                fontWeight: "600",
              }}
            >
              {product.miktar}
            </Text>
            <Text
              style={{
                color: "#5D3EBD",
                fontWeight: "bold",
                marginTop: 6,
                fontSize: 15,
              }}
            >
              <Text>{"\u20BA"}</Text>
              {product.fiyat}
            </Text>
          </View>
        </View>
        <View
          style={{
            shadowOpacity: 0.7,
            shadowColor: "gray",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            width: width * 0.22,
            borderColor: "lightgrey",
            borderWidth: 0.5,
            height: height * 0.04,
            borderRadius: 10,
          }}
        >
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text>-</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#5D3EBD",
              height: height * 0.04,
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 12 }}>
              1
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text>+</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default index;