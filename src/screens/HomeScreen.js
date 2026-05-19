import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RegionCard from '../components/RegionCard';

const REGIONS = [
  'سيئون',
  'تريم',
  'المكلا',
  'شبام',
  'القطن',
  'ساه',
  'حورة',
  'وادي سر',
];

export default function HomeScreen({ navigation }) {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const handlePress = (region) => {
    setSelectedRegion(region);
    // هنا سيتم فتح شاشة عرض الوفيات لهذه المنطقة لاحقاً
    // حالياً نكتفي بتغيير الحالة فقط
  };

  return (
    <View style={styles.container}>
      {REGIONS.map((region, index) => (
        <RegionCard
          key={index}
          region={region}
          isSelected={selectedRegion === region}
          onPress={() => handlePress(region)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F0E8',
  },
});