// src/screens/Detailproduk/index.jsx

import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Button, SafeAreaView } from 'react-native';

const Detailproduk = ({ route, navigation }) => {
  const { product } = route.params; // Dapatkan data produk dari parameter navigasi

  const [quantity, setQuantity] = useState(1);

  // Fungsi untuk mengubah kuantitas (+ / -)
  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(quantity + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Fungsi untuk menambah item ke keranjang
  const handleAddToCart = () => {
    // Pastikan harga adalah angka (hapus 'Rp ', '.', dan konversi ke float)
    const priceString = String(product.price || '0');
    const numericPrice = parseFloat(priceString.replace(/Rp\s*|\./g, '').replace(',', '.'));

    const cartItem = {
      productName: product.name,
      quantity,
      price: numericPrice, // Kirim harga sebagai angka
      productImage: product.image,
      // Tidak ada lagi additionalItems
    };

    // Navigasi ke layar Cart dan kirim item baru
    // Kita akan mengirim 'newlyAddedItem' agar CartScreen bisa membedakan
    // antara item baru dan data cart yang mungkin sudah ada dari state sebelumnya.
    navigation.navigate('MainApp', {
      screen: 'Cart', // Targetkan screen Cart di dalam MainApp (Tab Navigator)
      params: { newlyAddedItem: cartItem }, // Kirim item sebagai parameter
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Gambar Produk */}
        <Image source={{ uri: product.image }} style={styles.productImage} />
        
        {/* Judul Produk dan Rating (Rating masih statis) */}
        <Text style={styles.productTitle}>{product.name}</Text>
        <Text style={styles.productRating}>⭐ 4.5 (70+ Ulasan)</Text>

        {/* Deskripsi Produk */}
        <Text style={styles.sectionTitle}>Deskripsi Produk</Text>
        <Text style={styles.productDescription}>
          {product.description || 'Tidak ada deskripsi untuk produk ini.'}
        </Text>

        {/* Kontrol Kuantitas */}
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => handleQuantityChange('decrease')} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityValue}>{quantity}</Text>
          <TouchableOpacity onPress={() => handleQuantityChange('increase')} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Tombol Tambah Ke Troli */}
        <Button title="Tambah Ke Troli" onPress={handleAddToCart} color="#FF7F50" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 30, // Beri ruang lebih di bawah
    paddingHorizontal: 16,
  },
  productImage: {
    width: '100%',
    height: 250, // Sedikit perbesar gambar
    marginBottom: 16,
    borderRadius: 10, // Sedikit perbesar radius border
    resizeMode: 'cover',
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  productRating: {
    fontSize: 15, // Sedikit perkecil rating
    color: '#666',
    marginBottom: 16, // Tambah margin bawah
  },
  sectionTitle: { // Style untuk judul "Deskripsi Produk"
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
    color: '#333',
  },
  productDescription: {
    fontSize: 16,
    color: '#444', // Warna teks deskripsi
    lineHeight: 24, // Jarak antar baris
    textAlign: 'justify', // Rata kiri-kanan untuk deskripsi
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Pusatkan kontrol kuantitas
    marginVertical: 25, // Tambah margin vertikal
  },
  quantityButton: {
    backgroundColor: '#FFCDB2', // Warna lebih soft untuk tombol +/-
    width: 44,
    height: 44,
    borderRadius: 22, // Buat lebih bulat
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 12,
    elevation: 2, // Sedikit shadow untuk Android
  },
  quantityButtonText: {
    color: '#FF7F50', // Warna teks tombol +/-
    fontSize: 22,
    fontWeight: 'bold',
  },
  quantityValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    minWidth: 40, // Lebar minimum untuk angka kuantitas
    textAlign: 'center',
  },
});

export default Detailproduk;