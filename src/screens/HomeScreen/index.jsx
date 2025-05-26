// src/screens/HomeScreen/index.jsx

import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View, TextInput, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
import { Notification } from 'iconsax-react-native'; // Assuming you have icons installed

const HomeScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const makananPopuler = [
    { id: 1, name: 'Nasi Goreng', price: 'Rp 15.000', image: 'https://asset.kompas.com/crops/VcgvggZKE2VHqIAUp1pyHFXXYCs=/202x66:1000x599/1200x800/data/photo/2023/05/07/6456a450d2edd.jpg' },
    { id: 2, name: 'Sate Ayam', price: 'Rp 20.000', image: 'https://www.dapurkobe.co.id/wp-content/uploads/sate-ayam.jpg' },
    { id: 3, name: 'Gado - Gado', price: 'Rp 20.000', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Gado_gado.jpg' },
    { id: 4, name: 'Ayam Kampung', price: 'Rp 30.000', image: 'https://awsimages.detik.net.id/community/media/visual/2018/09/03/845426dc-203d-44f5-8b6d-797439026c35.jpeg?w=600&q=90' },
  ];

  const snackPopuler = [
    { id: 1, name: 'Keripik Singkong', price: 'Rp 6.000', image: 'https://blog.tokowahab.com/wp-content/uploads/2024/07/Cara-Membuat-Resep-Keripik-Singkong-Original-Praktis-3-Bahan-Saja.jpg' },
    { id: 2, name: 'Pisang Goreng', price: 'Rp 7.000', image: 'https://asianinspirations.com.au/wp-content/uploads/2019/11/R1018-PisangGoreng-new.jpg' },
  ];

  const minumanPopuler = [
    { id: 1, name: 'Es Teh Manis', price: 'Rp 5.000', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93' },
    { id: 2, name: 'Jus Alpukat', price: 'Rp 10.000', image: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443' },
  ];

  const handleSearch = (term) => setSearchTerm(term);

  const handleCategoryPress = (category) => console.log(`${category} Pressed`);

  const handleBannerPress = () => console.log('Banner diklik');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Food Court</Text>
          <Notification size="24" color="black" variant="Outline" />
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Mau makan apa hari ini?"
            placeholderTextColor="#FFA500"
            style={[styles.searchInput, { color: '#FFA500' }]}
            onChangeText={handleSearch}
            value={searchTerm}
          />
        </View>

        {/* Makanan Populer */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Makanan Populer</Text>
            <TouchableOpacity>
              <Text style={styles.sectionMore}>Lainnya</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {makananPopuler.map((item) => (
              <TouchableOpacity key={item.id} onPress={() => navigation.navigate('DetailProduk', { product: item })} style={styles.foodCard}>
                <Image source={{ uri: item.image }} style={styles.foodImage} />
                <Text style={styles.foodName}>{item.name}</Text>
                <Text style={styles.foodPrice}>{item.price}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Snack Populer */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Snack Populer</Text>
            <TouchableOpacity>
              <Text style={styles.sectionMore}>Lainnya</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {snackPopuler.map((item) => (
              <TouchableOpacity key={item.id} onPress={() => navigation.navigate('DetailProduk', { product: item })} style={styles.foodCard}>
                <Image source={{ uri: item.image }} style={styles.foodImage} />
                <Text style={styles.foodName}>{item.name}</Text>
                <Text style={styles.foodPrice}>{item.price}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Minuman Populer */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Minuman Populer</Text>
            <TouchableOpacity>
              <Text style={styles.sectionMore}>Lainnya</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {minumanPopuler.map((item) => (
              <TouchableOpacity key={item.id} onPress={() => navigation.navigate('DetailProduk', { product: item })} style={styles.foodCard}>
                <Image source={{ uri: item.image }} style={styles.foodImage} />
                <Text style={styles.foodName}>{item.name}</Text>
                <Text style={styles.foodPrice}>{item.price}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 20 : 0, // Adjust top padding for status bar on Android
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    paddingVertical: 10,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  categoryItem: {
    paddingVertical: 8,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFA500',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionMore: {
    fontSize: 14,
    color: '#FF5A5F',
    fontWeight: 'semi-bold',
  },
  foodCard: {
    marginRight: 16,
    alignItems: 'center',
  },
  foodImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  foodName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
  },
  foodPrice: {
    fontSize: 12,
    color: '#888',
  },
});

export default HomeScreen;
