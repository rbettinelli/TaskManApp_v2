import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icons from '../assets/icons';

interface CellProps {
  label: String;
  checked: Boolean;
}

const Cell: React.FC<CellProps> = ({ label, checked }) => {
  return (
    <View style={styles.cellList}>
      <View style={styles.leftItem}>
        <Text style={styles.titleStyle}>{label}</Text>
      </View>
      <Image
        style={styles.imageIcon}
        source={checked ? Icons.checkedbox : Icons.uncheckedbox}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cellList: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  leftItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  imageIcon: {
    width: 24,
    height: 24,
    tintColor: '#4C0099',
    opacity: 1,
    marginRight: 15,
  },
  titleStyle: {
    maxWidth: '100%',
  },
});

export default Cell;
