import React, {useEffect} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ProductSection from '../components/ProductSection';
import Products from '../components/Products';
import Loader from '../components/Loader';
import {requestProductData} from '../Redux/Action/publicAction';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {
  const dispatch = useDispatch();
  const {loading, data} = useSelector((store: any) => store.productsReducer);

  const cartItemsCount = useSelector(
    (state: any) => state.cartReducer.items.length,
  );

  const navigaton = useNavigation() as any;

  // console.log('Loading', data);

  useEffect(() => {
    dispatch(requestProductData());
  }, [dispatch]);

  let car: number = 12;
  let _car = 12 as number;

  return (
    <ScrollView showsVerticalScrollIndicator={false} className="bg-[#FFB2A2]">
      <View className="flex-row items-center justify-between h-12 border-b-[1px] border-b-[#6D6875] ">
        <Text className="text-xl uppercase text-[#1F1717] font-bold ml-2">
          Free-Tail
        </Text>
        <TouchableOpacity
          className="flex-row mr-2"
          onPress={() => navigaton.navigate('Cart')}>
          <MaterialCommunityIcons
            name="cart-outline"
            size={28}
            color="#CE5A67"
          />
          <View className="bg-black rounded-xl h-3 w-3 absolute top-0 right-0 ">
            <Text className="text-white text-center text-[9px]">
              {cartItemsCount}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View className="px-2 mt-4">
        <Text className="text-xl text-[#1F1717] font-medium mb-2">
          Today's Products:
        </Text>
        {loading ? <Loader /> : <Products products={data} />}
      </View>

      <ProductSection />
    </ScrollView>
  );
};

export default Home;
