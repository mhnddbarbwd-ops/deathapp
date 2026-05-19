import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function RegionCard({ region, isSelected, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.card, isSelected && styles.cardSelected]}
      onPress={onPress}
      activeOpacity={0.7}>
      <View style={styles.cardContent}>
        <Text style={styles.icon}>📍</Text>
        <Text style={[styles.title, isSelected && styles.titleSelected]}>
          {region}
        </Text>
        <Text style={styles.arrow}>❯</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardSelected: {
    backgroundColor: '#E0F2F1',
    borderWidth: 1,
    borderColor: '#009688',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
    marginRight: 12,
  },
  title: {
    fontSize: 18,
    fontFamily: 'IBM Plex Sans Arabic',
    fontWeight: '600',
    flex: 1,
  },
  titleSelected: {
    color: '#009688',
  },
  arrow: {
    fontSize: 18,
    color: '#999',
  },
});