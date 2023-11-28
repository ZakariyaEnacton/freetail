import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../components/Header';
import ProductSection from '../components/ProductSection';
import Products from '../components/Products';
import Loader from '../components/Loader';
import {requestProductData} from '../Redux/Action/publicAction';

const Home = () => {
  const dispatch = useDispatch();
  const {loading, products} = useSelector((state: any) => state.products);

  useEffect(() => {
    dispatch(requestProductData());
  }, [dispatch]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header />
      <ProductSection />
      <View className="px-2 mt-4">
        {loading ? <Loader /> : <Products products={products} />}
      </View>
    </ScrollView>
  );
};

export default Home;
