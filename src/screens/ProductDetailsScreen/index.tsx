import React,{useEffect,useState} from 'react';
import {View, Text, ActivityIndicator,ScrollView} from "react-native";
import { Product } from '../../models';
import ImagesCarousel from "../../components/ImagesCorousel"
import DetailBox from "../../components/DetailBox";
import DetailProperty from "../../components/DetailProperty";
import CardButton from "../../components/CardButton";


function index(props) {
  const [product, setProduct] = useState<Product>()
  useEffect(() => {
    setProduct(props.route.params.product)
    
  }, [])
  if (!product) {
    return <ActivityIndicator color={"#5D3EBD"}/>
  }
  return (
    <ScrollView>
      <ImagesCarousel images={product.images}/>
      <DetailBox price={product.fiyat} name={product.name} quantity={product.miktar}/>
      <Text style={{paddingHorizontal:10,paddingVertical:12,color:"#808B99",fontWeight:"600"}}>Detaylar</Text>
      <DetailProperty/>
      <CardButton/>
    </ScrollView>
  )
}

export default index
