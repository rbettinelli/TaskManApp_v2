import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CellListProps {
  label: String;
  details: String;
}

export const CellList: React.FC<CellListProps> = ({ label, details }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{label}</Text>
      <Text style={styles.itemText}>{details}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemText: {
    maxWidth: '80%',
  },
});

export default CellList;
