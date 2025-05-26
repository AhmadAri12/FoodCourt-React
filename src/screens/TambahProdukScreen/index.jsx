import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { ProductContext } from '../../context/ProductContext';

const TambahProdukScreen = ({ navigation }) => {
  const { addProduct } = useContext(ProductContext);

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = () => {
    if (!name || !price || !image) {
      Alert.alert('Gagal', 'Nama, Harga, dan Gambar wajib diisi.');
      return;
    }

    const newProduct = {
      name,
      category,
      description,
      price,
      image,
    };

    addProduct(newProduct);
    Alert.alert('Sukses', 'Produk berhasil ditambahkan!');
    navigation.goBack(); // kembali ke home
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Nama Produk</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Kategori</Text>
      <TextInput style={styles.input} value={category} onChangeText={setCategory} />

      <Text style={styles.label}>Deskripsi</Text>
      <TextInput style={styles.textArea} multiline numberOfLines={4} value={description} onChangeText={setDescription} />

      <Text style={styles.label}>Harga (contoh: 150000)</Text>
      <TextInput style={styles.input} keyboardType="numeric" value={price} onChangeText={setPrice} />

      <Text style={styles.label}>URL Gambar</Text>
      <TextInput style={styles.input} value={image} onChangeText={setImage} />

      <Button title="Tambah Produk" onPress={handleSubmit} color="#FF7F50" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginTop: 6,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginTop: 6,
    height: 100,
  },
});

export default TambahProdukScreen;
