import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

type Transaction = {
  id: string;
  name: string;
  amount: number;
  date: string;
  address: string;
};

type RootStackParamList = {
  TransactionsList: undefined;
  TransactionDetail: { transaction: Transaction };
};

type TransactionDetailScreenRouteProp = RouteProp<RootStackParamList, 'TransactionDetail'>;

const TransactionDetailScreen = () => {
  const route = useRoute<TransactionDetailScreenRouteProp>();
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.title}>{transaction.name}</Text>
          <Text style={styles.address}>{transaction.address}</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Amount:</Text>
          <Text style={styles.amount}>${transaction.amount.toFixed(2)}</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Date:</Text>
          <Text style={styles.detailValue}>{transaction.date}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  detailsContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  detailItem: {
    paddingVertical: 10,
  },
  title: {
    fontSize: 32,
    marginBottom: 5,
    textAlign: 'center',
  },
  address: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
  detailLabel: {
    fontSize: 18,
    color: 'gray',
  },
  detailValue: {
    fontSize: 22,
  },
  amount: {
    fontSize: 22,
    color: '#d95934',
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
});

export default TransactionDetailScreen;
