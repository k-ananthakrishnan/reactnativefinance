import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ImageBackground, RefreshControl } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useTransactions } from '../TransactionsContext';

type RootStackParamList = {
  TransactionsList: undefined;
  TransactionDetail: { transaction: Transaction };
};

type Transaction = {
  id: string;
  name: string;
  amount: number;
  date: string;
};

type TransactionsListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TransactionsList'
>;

const TransactionsListScreen = () => {
  const navigation = useNavigation<TransactionsListScreenNavigationProp>();
  const { transactions } = useTransactions();

  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
            style={styles.item}
          >
            <View style={styles.itemContent}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
            </View>
            <Text style={styles.date}>{item.date}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 10,
  },
  list: {
    padding: 16,
  },
  item: {
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 16,
    color: '#1987ff',
  },
  date: {
    fontSize: 14,
    color: 'gray',
    marginTop: 4,
  },
});

export default TransactionsListScreen;
