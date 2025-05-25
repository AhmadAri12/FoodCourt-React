import React from 'react';
import {View,Text,TextInput,Image,ScrollView,TouchableOpacity,StyleSheet,SafeAreaView,StatusBar,Platform,
} from 'react-native';
import { Notification, SearchNormal1, Category } from 'iconsax-react-native';
import { fontType } from './src/theme';

export default function App() {
  const makananPopuler = [
    {
      id: 1,
      name: 'Gado Gado',
      price: 'Rp 13.000',
      image:
        'https://awsimages.detik.net.id/community/media/visual/2024/02/14/resep-gado-gado-siram.jpeg?w=1200',
    },
    {
      id: 2,
      name: 'Nasi Goreng',
      price: 'Rp 15.000',
      image:
        'https://asset.kompas.com/crops/VcgvggZKE2VHqIAUp1pyHFXXYCs=/202x66:1000x599/1200x800/data/photo/2023/05/07/6456a450d2edd.jpg',
    },
    {
      id: 3,
      name: 'Sate Ayam',
      price: 'Rp 20.000',
      image:
        'https://www.dapurkobe.co.id/wp-content/uploads/sate-ayam.jpg',
    },
  ];

  const snackPopuler = [
    {
      id: 1,
      name: 'Keripik Singkong',
      price: 'Rp 6.000',
      image:
        'https://blog.tokowahab.com/wp-content/uploads/2024/07/Cara-Membuat-Resep-Keripik-Singkong-Original-Praktis-3-Bahan-Saja.jpg',
    },
    {
      id: 2,
      name: 'Pisang Goreng',
      price: 'Rp 7.000',
      image:
        'https://asianinspirations.com.au/wp-content/uploads/2019/11/R1018-PisangGoreng-new.jpg',
    },
  ];

  const minumanPopuler = [
    {
      id: 1,
      name: 'Es Teh Manis',
      price: 'Rp 5.000',
      image:
        'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
    },
    {
      id: 2,
      name: 'Jus Alpukat',
      price: 'Rp 10.000',
      image:
        'https://images.unsplash.com/photo-1506806732259-39c2d0268443',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Food Court</Text>
          <Notification size="24" color="black" variant="Outline" />
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <SearchNormal1 size={20} color="#FFA500" variant="Outline" />
          <TextInput
            placeholder="Mau makan apa hari ini?"
            placeholderTextColor="#FFA500"
            style={[styles.searchInput, { color: '#FFA500' }]}
          />
        </View>

        {/* Promo Banner */}
        <TouchableOpacity
          style={styles.bannerContainer}
          onPress={() => console.log('Banner diklik')}
        >
          <Image
            source={{
              uri: 'https://storage.googleapis.com/bakingworld-web-production/uploads/media/content_banner/banner-gado-gado-gado-1738655470333.jpg',
            }}
            style={styles.bannerImage}
            resizeMode="cover"
          />
          <View style={styles.promoTag}>
            <Text style={styles.promoText}>15 rb</Text>
          </View>
        </TouchableOpacity>

        {/* Kategori */}
        <View style={styles.categoryRow}>
          {['Makanan', 'Minuman', 'Snack'].map((item, index) => (
            <TouchableOpacity key={index} style={styles.categoryItem}>
              <Category size={24} color="#FF5A5F" variant="Bold" />
              <Text style={styles.categoryText}>{item}</Text>
            </TouchableOpacity>
          ))}
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
              <TouchableOpacity
                key={item.id}
                style={styles.card}
                onPress={() => console.log('Klik Makanan Populer', item.name)}
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.cardImage}
                />
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardPrice}>{item.price}</Text>
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
              <TouchableOpacity
                key={item.id}
                style={styles.card}
                onPress={() => console.log('Klik Snack Populer', item.name)}
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.cardImage}
                />
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardPrice}>{item.price}</Text>
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
              <TouchableOpacity
                key={item.id}
                style={styles.card}
                onPress={() => console.log('Klik Minuman Populer', item.name)}
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.cardImage}
                />
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardPrice}>{item.price}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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
    fontFamily: fontType['OpenSans-Bold'],
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
    fontFamily: fontType['OpenSans-Regular'],
    paddingVertical: 10,
  },
  bannerContainer: {
    height: 160,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  promoTag: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FF5A5F',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  promoText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: fontType['OpenSans-SemiBold'],
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  categoryItem: {
    alignItems: 'center',
  },
  categoryText: {
    marginTop: 4,
    fontSize: 12,
    fontFamily: fontType['OpenSans-Regular'],
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
    fontFamily: fontType['OpenSans-Bold'],
  },
  sectionMore: {
    fontSize: 14,
    color: '#FF5A5F',
    fontFamily: fontType['OpenSans-SemiBold'],
  },
  card: {
    width: 140,
    marginRight: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    padding: 8,
  },
  cardImage: {
    width: '100%',
    height: 90,
    borderRadius: 8,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['OpenSans-SemiBold'],
  },
  cardPrice: {
    fontSize: 12,
    color: '#888',
    fontFamily: fontType['OpenSans-Regular'],
  },
});
