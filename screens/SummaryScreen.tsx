import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { useTransactions } from '../TransactionsContext';

type Transaction = {
  id: string;
  name: string;
  amount: number;
  date: string;
};

const calculateTotalExpenses = (transactions: Transaction[]) => {
  return transactions.reduce((total, transaction) => total + transaction.amount, 0);
};

const findHighestTransaction = (transactions: Transaction[]) => {
  return transactions.reduce((prev, current) => (prev.amount > current.amount ? prev : current));
};

const findLowestTransaction = (transactions: Transaction[]) => {
  return transactions.reduce((prev, current) => (prev.amount < current.amount ? prev : current));
};

const SummaryScreen = () => {
  const { transactions } = useTransactions();
  const totalExpenses = calculateTotalExpenses(transactions);
  const highestTransaction = findHighestTransaction(transactions);
  const lowestTransaction = findLowestTransaction(transactions);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.jpg')}
        style={styles.imageBackground}
      >
       
      </ImageBackground>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.subtitle}>Total Expenses</Text>
          <Text style={styles.amount}>${totalExpenses.toFixed(2)}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.subtitle}>Number of Transactions</Text>
          <Text style={styles.count}>{transactions.length}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.subtitle}>High Spending</Text>
          <Text style={styles.transactionHigh}>
            {highestTransaction.name} - ${highestTransaction.amount.toFixed(2)}
          </Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.subtitle}>Low Spending</Text>
          <Text style={styles.transactionLow}>
            {lowestTransaction.name} - ${lowestTransaction.amount.toFixed(2)}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    padding: 16,
  },
  detailsContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 8,
    color: 'black'
  },
  amount: {
    fontSize: 24,
    color: '#1987ff',
  },
  count: {
    fontSize: 24,
  },
  transactionHigh: {
    fontSize: 18,
    color: '#d95934',
  },
  transactionLow: {
    fontSize: 18,
    color: '#47908b',
  },
});

export default SummaryScreen;
