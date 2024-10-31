import { View, Text, Image } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import styles from "../../screens/HomeScreen/styles";

function Index() {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image
          style={styles.image}
          source={{ uri: "https://cdn.getir.com/misc/emoji/house.png" }}
        />
        <View style={styles.headerOneView}>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>Ev</Text>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 12.5,
              color: "#6E7480", // Color code corrected
              marginLeft: 6,
              marginRight: 2,
            }}
          >
            Akdeniz Mahallesi,39080 Sk.
          </Text>
          <Entypo name="chevron-small-right" size={24} color="#5D3EBD" />
        </View>
      </View>

      <View style={styles.headerTwo}>
        <Text style={{ fontSize: 10, fontWeight: "bold", color: "#5D3EBD" }}>
          TVS
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#5D3EBD" }}>
          13 <Text style={{ fontSize: 16, color: "#5D3EBD" }}>dk</Text>
        </Text>
      </View>
    </View>
  );
}

export default Index;
