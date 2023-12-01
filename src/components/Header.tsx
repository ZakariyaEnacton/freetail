import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {
  const cartItemsCount = useSelector(
    (state: any) => state.cartReducer.items.length,
  );

  return (
    <View className="flex-row items-center justify-between h-12 border-b-[1px] border-b-[#1F1717] ">
      <Text className="text-xl uppercase text-[#1F1717] font-bold">
        Free-Tail
      </Text>
      <TouchableOpacity className="flex-row">
        <MaterialCommunityIcons name="cart-outline" size={28} color="#CE5A67" />
        <View className="bg-black rounded-xl h-3 w-3 absolute top-0 right-0 ">
          <Text className="text-white text-center text-[9px]">
            {cartItemsCount}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
