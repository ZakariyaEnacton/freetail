import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';

const BottomModal = ({isOpen, closeModal, product}: any) => {
  return (
    <Modal visible={isOpen} animationType="slide" transparent={true}>
      <View className="flex justify-end absolute bottom-0 w-full">
        <View className="bg-white rounded-t-3xl p-4">
          <View className="bg-gray-400 w-10 h-1 rounded-lg self-center mt-4 absolute top-0" />
          <ScrollView>
            <View className="flex px-4 py-8 items-center justify-center gap-4">
              <Image
                source={{uri: product.image}}
                className="h-32 w-32"
                resizeMode="contain"
              />
              <Text className="text-sm text-center">{product.title}</Text>
              <Text className="text-[11px] text-center">
                {product.description}
              </Text>
            </View>
          </ScrollView>
          <TouchableOpacity onPress={closeModal}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default BottomModal;
