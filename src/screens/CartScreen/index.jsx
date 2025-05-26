import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { CartContext } from '../../context/CartContext'; // Import Context

const CartScreen = ({ route, navigation }) => {
  const { cartItems, addItemToCart, removeItemFromCart, updateQuantity } = useContext(CartContext);

  useEffect(() => {
    if (route.params?.newlyAddedItem) {
      addItemToCart(route.params.newlyAddedItem);
      navigation.setParams({ newlyAddedItem: undefined });
    }
  }, [route.params?.newlyAddedItem]);

  const calculateItemTotal = (item) => item.price * item.quantity;
  const calculateSubtotal = () => cartItems.reduce((total, item) => total + calculateItemTotal(item), 0);
  const shippingFee = 6000;
  const subtotal = calculateSubtotal();
  const total = subtotal + shippingFee;

  if (cartItems.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Keranjang Anda masih kosong.</Text>
        <TouchableOpacity style={styles.shopNowButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.shopNowButtonText}>Belanja Sekarang</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => `${item.productName}-${index}`}
        renderItem={({ item, index }) => (
          <View style={styles.cartItem}>
            <Image source={{ uri: item.productImage }} style={styles.productImage} />
            <View style={styles.cartItemDetails}>
              <Text style={styles.productName}>{item.productName}</Text>
              <Text style={styles.productPrice}>Rp {item.price.toLocaleString('id-ID')}</Text>
              <View style={styles.quantityControlContainer}>
                <TouchableOpacity onPress={() => updateQuantity(index, 'decrease')} style={styles.cartQuantityButton}>
                  <Text style={styles.cartQuantityButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.cartQuantityValue}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => updateQuantity(index, 'increase')} style={styles.cartQuantityButton}>
                  <Text style={styles.cartQuantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.itemTotalContainer}>
              <Text style={styles.itemTotalText}>Rp {calculateItemTotal(item).toLocaleString('id-ID')}</Text>
              <TouchableOpacity onPress={() => removeItemFromCart(index)} style={styles.removeButton}>
                <Text style={styles.removeText}>✕</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 16 }}
      />

      <View style={styles.summaryContainer}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Subtotal</Text>
          <Text style={styles.summaryAmount}>Rp {subtotal.toLocaleString('id-ID')}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Biaya Pengantaran</Text>
          <Text style={styles.summaryAmount}>Rp {shippingFee.toLocaleString('id-ID')}</Text>
        </View>
        <View style={[styles.summaryRow, styles.grandTotalRow]}>
          <Text style={[styles.summaryText, styles.grandTotalText]}>Total</Text>
          <Text style={[styles.summaryAmount, styles.grandTotalText]}>Rp {total.toLocaleString('id-ID')}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton} onPress={() => console.log('Checkout:', cartItems, 'Total:', total)}>
          <Text style={styles.checkoutText}>Checkout ({cartItems.length} item)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9', // Warna background sedikit berbeda
    paddingTop: 40, // Padding atas untuk menghindari overlap dengan status bar
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  emptyText: {
    fontSize: 18,
    color: '#555',
    marginBottom: 25,
    textAlign: 'center',
  },
  shopNowButton: {
    backgroundColor: '#FF7F50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  shopNowButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    padding: 12,
    elevation: 3, // Shadow untuk Android
    shadowColor: '#000', // Shadow untuk iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  cartItemDetails: {
    flex: 1,
    justifyContent: 'space-between', // Distribusi ruang vertikal
  },
  productName: {
    fontSize: 16,
    fontWeight: '600', // Sedikit lebih tebal
    color: '#333',
  },
  productPrice: {
    fontSize: 14,
    color: '#FF7F50', // Warna harga
    marginVertical: 4,
  },
  quantityControlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  cartQuantityButton: {
    backgroundColor: '#f0f0f0',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartQuantityButtonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartQuantityValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginHorizontal: 12,
    minWidth:25,
    textAlign: 'center',
  },
  itemTotalContainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-between', // Total di atas, hapus di bawah
    paddingLeft:10,
  },
  itemTotalText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  removeButton: {
    padding: 5, // Area sentuh
  },
  removeText: {
    fontSize: 20,
    color: '#FF3B30', // Warna merah untuk hapus
    fontWeight:'bold',
  },
  summaryContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopLeftRadius: 20, // Border radius atas
    borderTopRightRadius: 20,
    borderTopWidth:1,
    borderColor: '#e0e0e0',
    elevation: 5,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 16,
    color: '#555',
  },
  summaryAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  grandTotalRow: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 10,
    marginTop: 5,
  },
  grandTotalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF7F50',
  },
  checkoutButton: {
    backgroundColor: '#FF7F50',
    paddingVertical: 14,
    borderRadius: 25, // Tombol lebih bulat
    alignItems: 'center',
    marginTop: 10,
  },
  checkoutText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default CartScreen;