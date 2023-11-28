import {View, Text, ScrollView} from 'react-native';
import React from 'react';

const ProductSection = () => {
  return (
    <ScrollView>
      <View className="m-2 items-center">
        <Text className="text-md font-bold text-[#1F1717]">
          Free-Tail: Where Shopping Unleashes Freedom!
        </Text>
        <Text className="text-xs font-medium text-[#1F1717] text-center mt-1">
          Discover a world of boundless choices at FreeTail - your one-stop
          destination for endless variety, unbeatable deals, and the freedom to
          shop your way. Explore, indulge, and make every purchase a celebration
          of your unique style and preferences. Join us and experience the
          liberation of shopping!
        </Text>
      </View>
    </ScrollView>
  );
};

export default ProductSection;
