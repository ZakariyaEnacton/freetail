import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';

const Loader = () => {
  return (
    <View className="flex-cols items-center justify-center">
      <ActivityIndicator size="large" color="#1F1717" />
      <Text className="text-sm ml-4">Loading Products...</Text>
    </View>
  );
};

export default Loader;
