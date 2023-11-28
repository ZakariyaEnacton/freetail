import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';

interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
}

interface Props {
  products: Product[];
}

const Products: React.FC<Props> = ({products}) => {
  const renderProduct = ({item}: {item: Product}) => {
    return (
      <View className="h-96 w-60 border-[1px] rounded border-gray-400 mb-2 mr-2">
        <Image source={{uri: item.image}} className="h-[72%] w-full rounded " />

        <View className="mt-1 p-1">
          <Text
            className="text-[12px] text-center text-[#1F1717]"
            ellipsizeMode="tail"
            numberOfLines={2}>
            {item.title}
          </Text>
          <Text
            className="text-[10px] text-center mt-[2px] text-[#1F1717] opacity-60"
            ellipsizeMode="tail"
            numberOfLines={3}>
            {item.description}
          </Text>
        </View>

        <View className="border-[1px] border-[#5F6F52] bg-[#A9B388] h-4 w-14 rounded absolute bottom-1 left-1">
          <Text className="text-[9px] text-[#5F6F00] font-bold text-center">
            {item.price}
          </Text>
        </View>
        <TouchableOpacity className="border-[1px] border-[#872341] bg-[#BE3144] h-4 w-14 rounded absolute bottom-1 right-1">
          <Text className="text-[9px] text-[#22092C] font-bold text-center">
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Products;
