import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import styles from "./styles";
import Entypo from "@expo/vector-icons/Entypo";
import HeaderMain from "../../components/HeaderMain";
import BannerCarousel from "../../components/BannerCorousel";
import MainCategories from "../../components/MainCategories";

function index() {
  return (
    <ScrollView stickyHeaderIndices={[0]} style={{backgroundColor:"#f5f5f5"}}>
      <HeaderMain />
      <BannerCarousel/>
      <MainCategories/>
    </ScrollView>
  );
}

export default index;