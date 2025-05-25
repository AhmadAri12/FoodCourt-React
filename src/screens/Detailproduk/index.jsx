import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Button, SafeAreaView } from 'react-native';

const Detailproduk = () => {
  const [quantity, setQuantity] = useState(1);
  const [additionalItems, setAdditionalItems] = useState({
    kerupuk: false,
    sayuran: false,
    bumbuKacang: false,
  });

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(quantity + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    console.log('Added to Cart');
  };

  const toggleAdditionalItem = (item) => {
    setAdditionalItems({
      ...additionalItems,
      [item]: !additionalItems[item],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image
          source={{ uri: 'https://awsimages.detik.net.id/community/media/visual/2024/02/14/resep-gado-gado-siram.jpeg?w=1200' }}
          style={styles.productImage}
        />
        <Text style={styles.productTitle}>Gado Gado</Text>
        <Text style={styles.productRating}>⭐ 4.5 (70+ Reviews)</Text>
        <Text style={styles.productDescription}>
          Gado-gado makanan khas Jakarta berisi sayur-sayuran yang direbus, irisan telur dan tahu,
          serta ditaburi bawang goreng dan rasa kasih sayang.
        </Text>

        <Text style={styles.addOnTitle}>Tambahan</Text>
        <View style={styles.addOnContainer}>
          <TouchableOpacity
            style={[styles.addOnButton, additionalItems.kerupuk && styles.selected]}
            onPress={() => toggleAdditionalItem('kerupuk')}
          >
            <Text style={styles.addOnText}>Kerupuk (Rp 5000)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.addOnButton, additionalItems.sayuran && styles.selected]}
            onPress={() => toggleAdditionalItem('sayuran')}
          >
            <Text style={styles.addOnText}>Sayuran (Rp 2000)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.addOnButton, additionalItems.bumbuKacang && styles.selected]}
            onPress={() => toggleAdditionalItem('bumbuKacang')}
          >
            <Text style={styles.addOnText}>Bumbu Kacang (Rp 4000)</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => handleQuantityChange('decrease')} style={styles.quantityButton}>
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityValue}>{quantity}</Text>
          <TouchableOpacity onPress={() => handleQuantityChange('increase')} style={styles.quantityButton}>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>

        <Button title="Tambah Ke Troli" onPress={handleAddToCart} color="#FF7F50" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40, // Menambahkan padding khusus agar konten tidak tertutup navbar
  },
  scrollContent: {
    paddingBottom: 20, // Memberikan padding bawah
    paddingHorizontal: 16,
  },
  productImage: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    borderRadius: 8, // optional for styling
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  productRating: {
    fontSize: 16,
    marginVertical: 8,
  },
  productDescription: {
    fontSize: 16,
    color: '#555',
    marginVertical: 8,
  },
  addOnTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  addOnContainer: {
    marginBottom: 16,
  },
  addOnButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#F8F8F8',
    marginBottom: 8,
  },
  addOnText: {
    fontSize: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  quantityButton: {
    backgroundColor: '#FF7F50',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  quantityText: {
    color: '#fff',
    fontSize: 20,
  },
  quantityValue: {
    fontSize: 20,
    marginHorizontal: 16,
  },
  selected: {
    backgroundColor: '#FF7F50',
  },
});

export default Detailproduk;
