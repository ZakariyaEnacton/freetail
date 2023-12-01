import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  requestAddToCart,
  requestRemoveFromCart,
} from '../Redux/Action/publicAction';

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
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cartReducer.items);
  const [inCart, setInCart] = useState<boolean>(false);

  // console.log('Cart Items', cartItems);

  const addToCart = (product: Product) => {
    dispatch(requestAddToCart(product));
    setInCart(true);
  };

  const removeFromCart = (product: Product) => {
    dispatch(requestRemoveFromCart(product));
    setInCart(false);
  };

  const isItemInCart = (productId: number): boolean => {
    return cartItems.some((item: any) => item.id === productId);
  };

  const renderProduct = ({item}: {item: Product}) => {
    const alreadyInCart = isItemInCart(item.id);
    return (
      <View className="h-72 w-[170px] border-[1px] rounded border-[#6D6875] mb-2 mr-2 bg-[#FFCDB2]">
        <Image
          source={{uri: item.image}}
          // className="h-[72%] w-full rounded"
          style={{
            objectFit: 'contain',
            height: '62%',
            width: '100%',
            borderRadius: 2,
          }}
        />

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

        <View className="border-[1px] border-[#5F6F00] bg-[#3e433a] h-4 w-14 rounded absolute bottom-1 left-1">
          <Text className="text-[9px] text-[#A9B388] font-bold text-center">
            {item.price}
          </Text>
        </View>
        {alreadyInCart ? (
          <TouchableOpacity
            onPress={() => removeFromCart(item)}
            className="border-[1px] border-[#872341] bg-[#FCF5ED] h-4 w-24 rounded absolute bottom-1 right-1">
            <Text className="text-[9px] text-[#BE3144] font-bold text-center">
              Remove From Cart
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => addToCart(item)}
            className="border-[1px] border-[#872341] bg-[#BE3144] h-4 w-14 rounded absolute bottom-1 right-1">
            <Text className="text-[9px] text-[#FCF5ED] font-bold text-center">
              Add To Cart
            </Text>
          </TouchableOpacity>
        )}
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
