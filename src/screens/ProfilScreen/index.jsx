import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const ProfilScreen = () => {
  const userData = {
    name: 'Zaenuddin',
    phone: '0863746238642864',
    userType: 'Customer',
    image: 'https://awsimages.detik.net.id/community/media/visual/2018/03/03/39f24229-6f26-4a17-aa92-44c3bd3dae9e_43.jpeg?w=600&q=90', // Ganti dengan URL gambar yang sesuai
  };

  const product = {
    name: 'Gado Gado',
    subTitle: 'Bumbu Kacang',
    image: 'https://awsimages.detik.net.id/community/media/visual/2024/02/14/resep-gado-gado-siram.jpeg?w=1200', // Ganti dengan URL gambar produk yang sesuai
  };

  const handleDelivery = () => {
    console.log('Pengantaran');
    // Implementasikan logika pengantaran produk di sini
  };

  return (
    <ScrollView style={styles.container}>
      {/* Profile Image */}
      <View style={styles.profileContainer}>
        <Image source={{ uri: userData.image }} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={styles.userInfoText}>Nama      : {userData.name}</Text>
          <Text style={styles.userInfoText}>Telepon   : {userData.phone}</Text>
          <Text style={styles.userInfoText}>Jenis     : {userData.userType}</Text>
        </View>
      </View>

      {/* Product Information */}
      <View style={styles.productContainer}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productSubTitle}>{product.subTitle}</Text>
        </View>
        <TouchableOpacity style={styles.deliveryButton} onPress={handleDelivery}>
          <Text style={styles.deliveryText}>Pengantaran</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    paddingTop: 40, // Memberikan ruang di atas untuk status bar
  },
  profileContainer: {
    alignItems: 'center', // Menyusun gambar dan informasi pengguna di tengah
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // Membuat gambar berbentuk lingkaran
    marginBottom: 16,
  },
  userInfo: {
    alignItems: 'left',
  },
  userInfoText: {
    fontSize: 16,
    marginVertical: 4,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 20,
    marginBottom: 20,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productSubTitle: {
    fontSize: 14,
    color: '#888',
  },
  deliveryButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#FF7F50',
    borderRadius: 8,
  },
  deliveryText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProfilScreen;
