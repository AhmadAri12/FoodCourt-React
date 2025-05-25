// src/components/PromoBanner.jsx
import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';

const PromoBanner = ({ onPress }) => (
  <TouchableOpacity style={{ height: 160, borderRadius: 16, overflow: 'hidden', marginBottom: 20, position: 'relative' }} onPress={onPress}>
    <Image
      source={{
        uri: 'https://storage.googleapis.com/bakingworld-web-production/uploads/media/content_banner/banner-gado-gado-gado-1738655470333.jpg',
      }}
      style={{ width: '100%', height: '100%' }}
      resizeMode="cover"
    />
    <View style={{ position: 'absolute', top: 10, right: 10, backgroundColor: '#FF5A5F', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20 }}>
      <Text style={{ color: '#fff', fontSize: 12 }}>15 rb</Text>
    </View>
  </TouchableOpacity>
);

export default PromoBanner;
