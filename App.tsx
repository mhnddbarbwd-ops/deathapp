import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const regions = [
    'سيئون', 'تريم', 'المكلا', 'شبام',
    'القطن', 'ساه', 'حورة', 'وادي سر',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>الوفيات</Text>
      {regions.map((region, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.regionText}>{region}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F0E8',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  regionText: {
    fontSize: 18,
  },
});