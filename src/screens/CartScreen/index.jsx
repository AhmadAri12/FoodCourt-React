import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput, Button } from 'react-native';

export const CartScreen = () => {
  const [quantity, setQuantity] = useState(2); // Jumlah produk yang ada di troli
  const [voucher, setVoucher] = useState(''); // Voucher input
  const [note, setNote] = useState(''); // Catatan input

  const productPrice = 15000; // Harga per item
  const subTotal = productPrice * quantity;
  const shippingFee = 6000;
  const total = subTotal + shippingFee;

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(quantity + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Troli</Text>

      {/* Produk */}
      <View style={styles.productContainer}>
        <Image
          source={{ uri: 'https://awsimages.detik.net.id/community/media/visual/2024/02/14/resep-gado-gado-siram.jpeg?w=1200' }}
          style={styles.productImage}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>Gado Gado</Text>
          <Text style={styles.productSubTitle}>Bumbu Kacang</Text>
          <Text style={styles.productPrice}>Rp {productPrice.toLocaleString()}</Text>
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
      </View>

      {/* Voucher */}
      <View style={styles.voucherContainer}>
        <Text style={styles.voucherLabel}>Voucher</Text>
        <TextInput
          value={voucher}
          onChangeText={setVoucher}
          style={styles.voucherInput}
          placeholder="Masukkan Kode Voucher"
        />
      </View>

      {/* Catatan */}
      <View style={styles.noteContainer}>
        <Text style={styles.noteLabel}>Catatan</Text>
        <TextInput
          value={note}
          onChangeText={setNote}
          style={styles.noteInput}
          placeholder="Tinggalkan Pesan"
        />
      </View>

      {/* Rincian Harga */}
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>Sub Total: Rp {subTotal.toLocaleString()}</Text>
        <Text style={styles.priceText}>Biaya Pengantaran: Rp {shippingFee.toLocaleString()}</Text>
        <Text style={styles.priceTextTotal}>Total: Rp {total.toLocaleString()}</Text>
      </View>

      {/* Tombol Checkout */}
      <Button title="Checkout" onPress={() => console.log('Checkout pressed')} color="#FF7F50" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 16,
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 16,
    borderRadius: 8,
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
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  quantityButton: {
    backgroundColor: '#FF7F50',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 8,
  },
  quantityText: {
    color: '#fff',
    fontSize: 20,
  },
  quantityValue: {
    fontSize: 20,
    marginHorizontal: 16,
  },
  voucherContainer: {
    marginBottom: 16,
  },
  voucherLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  voucherInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  noteContainer: {
    marginBottom: 16,
  },
  noteLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  noteInput: {
    height: 80,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    textAlignVertical: 'top',
  },
  priceContainer: {
    marginVertical: 16,
  },
  priceText: {
    fontSize: 16,
    marginBottom: 8,
  },
  priceTextTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
});
