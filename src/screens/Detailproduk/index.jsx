// src/screens/Detailproduk/index.jsx

import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Button, SafeAreaView } from 'react-native';

const Detailproduk = ({ route, navigation }) => {
  const { product } = route.params; // Get product data from navigation params

  const [quantity, setQuantity] = useState(1);
  const [additionalItems, setAdditionalItems] = useState({
    kerupuk: false,
    savuran: false,
    bumbuKacang: false,
  });

  // Handle quantity changes (+ / -)
  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(quantity + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Calculate total cost for additional items (e.g., Kerupuk, Savuran, Bumbu Kacang)
  const calculateAdditionsTotal = () => {
    let total = 0;
    if (additionalItems.kerupuk) total += 5000;
    if (additionalItems.savuran) total += 2000;
    if (additionalItems.bumbuKacang) total += 4000;
    return total;
  };

  // Add item to cart
  const handleAddToCart = () => {
    const cartItem = {
      productName: product.name,
      quantity,
      price: product.price,
      productImage: product.image, // Pass the image URL as productImage
      additionalItems: Object.keys(additionalItems).filter(item => additionalItems[item]),
      total: product.price * quantity + calculateAdditionsTotal(), // Add additional item cost
    };

    // Navigate to Cart screen and pass cartItem data
    navigation.navigate('Cart', { cartItems: [cartItem] });
  };

  // Toggle selection of additional items
  const toggleAdditionalItem = (item) => {
    setAdditionalItems({
      ...additionalItems,
      [item]: !additionalItems[item],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Product Image */}
        <Image source={{ uri: product.image }} style={styles.productImage} />
        
        {/* Product Title and Rating */}
        <Text style={styles.productTitle}>{product.name}</Text>
        <Text style={styles.productRating}>⭐ 4.5 (70+ Reviews)</Text>

        {/* Product Description */}
        <Text style={styles.productDescription}>
          {product.description}
        </Text>

        {/* Additional Items */}
        <Text style={styles.addOnTitle}>Tambahan</Text>
        <View style={styles.addOnContainer}>
          <TouchableOpacity
            style={[styles.addOnButton, additionalItems.kerupuk && styles.selected]}
            onPress={() => toggleAdditionalItem('kerupuk')}
          >
            <Text style={styles.addOnText}>Kerupuk (Rp 5000)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.addOnButton, additionalItems.savuran && styles.selected]}
            onPress={() => toggleAdditionalItem('savuran')}
          >
            <Text style={styles.addOnText}>Savuran (Rp 2000)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.addOnButton, additionalItems.bumbuKacang && styles.selected]}
            onPress={() => toggleAdditionalItem('bumbuKacang')}
          >
            <Text style={styles.addOnText}>Bumbu Kacang (Rp 4000)</Text>
          </TouchableOpacity>
        </View>

        {/* Quantity Control */}
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => handleQuantityChange('decrease')} style={styles.quantityButton}>
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityValue}>{quantity}</Text>
          <TouchableOpacity onPress={() => handleQuantityChange('increase')} style={styles.quantityButton}>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Add to Cart Button */}
        <Button title="Tambah Ke Troli" onPress={handleAddToCart} color="#FF7F50" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40, // Padding for top bar
  },
  scrollContent: {
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  productImage: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    borderRadius: 8,
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
