// src/screens/CartScreen/index.jsx

import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button, Image } from 'react-native';

const CartScreen = ({ route, navigation }) => {
  const { cartItems } = route.params;

  // State for managing quantity changes in the cart
  const [updatedCartItems, setUpdatedCartItems] = useState(cartItems);

  // Update the quantity of an item
  const handleQuantityChange = (index, type) => {
    let newCartItems = [...updatedCartItems];
    if (type === 'increase') {
      newCartItems[index].quantity += 1;
    } else if (type === 'decrease' && newCartItems[index].quantity > 1) {
      newCartItems[index].quantity -= 1;
    }
    setUpdatedCartItems(newCartItems);
  };

  // Calculate total price for a single cart item (price * quantity + additional items)
  const calculateItemTotal = (item) => {
    const additionalItemsTotal = calculateAdditionsTotal(item);
    return item.price * item.quantity + additionalItemsTotal;
  };

  // Calculate the total for additional items (e.g., Kerupuk, Savuran, Bumbu Kacang)
  const calculateAdditionsTotal = (item) => {
    let total = 0;
    if (item.additionalItems.includes('kerupuk')) total += 5000;
    if (item.additionalItems.includes('savuran')) total += 2000;
    if (item.additionalItems.includes('bumbuKacang')) total += 4000;
    return total;
  };

  // Calculate the subtotal by summing up the total of all cart items
  const calculateSubtotal = () => {
    return updatedCartItems.reduce((total, item) => total + calculateItemTotal(item), 0);
  };

  // Shipping fee
  const shippingFee = 6000;
  const subtotal = calculateSubtotal();
  const total = subtotal + shippingFee;

  // Remove an item from the cart
  const handleRemoveItem = (index) => {
    let newCartItems = updatedCartItems.filter((_, i) => i !== index);
    setUpdatedCartItems(newCartItems);
  };

  return (
    <View style={styles.container}>

      {/* List of cart items */}
      <FlatList
        data={updatedCartItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.cartItem}>
            <Image source={{ uri: item.productImage }} style={styles.productImage} />
            <View style={styles.cartItemDetails}>
              <Text style={styles.productName}>{item.productName}</Text>
              <Text style={styles.productPrice}>Rp {item.price}</Text>
              <Text style={styles.quantityText}>Jumlah: {item.quantity}</Text>
              {item.additionalItems.length > 0 && (
                <Text style={styles.additionalItemsText}>Tambahan: {item.additionalItems.join(', ')}</Text>
              )}
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => handleQuantityChange(index, 'decrease')} style={styles.quantityButton}>
                  <Text style={styles.quantityText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityValue}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => handleQuantityChange(index, 'increase')} style={styles.quantityButton}>
                  <Text style={styles.quantityText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity onPress={() => handleRemoveItem(index)} style={styles.removeButton}>
              <Text style={styles.removeText}>✕</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Subtotal, shipping fee, and total */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Sub Total: Rp {subtotal}</Text>
        <Text style={styles.totalText}>Biaya Pengantaran: Rp {shippingFee}</Text>
        <Text style={styles.totalText}>Total: Rp {total}</Text>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity style={styles.checkoutButton} onPress={() => console.log('Proceed to checkout')}>
        <Text style={styles.checkoutText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  cartItemDetails: {
    flex: 1,
    marginLeft: 16,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
  },
  quantityText: {
    fontSize: 14,
    color: '#555',
  },
  additionalItemsText: {
    fontSize: 14,
    color: '#555',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityButton: {
    backgroundColor: '#FF7F50',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
  },
  quantityValue: {
    fontSize: 18,
    marginHorizontal: 16,
  },
  removeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  removeText: {
    fontSize: 18,
    color: '#FF5A5F',
  },
  totalContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 16,
  },
  totalText: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#FF7F50',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartScreen;
