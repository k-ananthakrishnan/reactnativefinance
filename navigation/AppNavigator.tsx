import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TransactionsListScreen from '../screens/TransactionsListScreen';
import TransactionDetailScreen from '../screens/TransactionDetailScreen';
import SummaryScreen from '../screens/SummaryScreen';
import { TransactionsProvider } from '../TransactionsContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TransactionsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TransactionsList" component={TransactionsListScreen} options={{ title: 'Transactions List' }} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} options={{ title: 'Transaction Detail' }} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <TransactionsProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName: string = '';

              if (route.name === 'Transactions') {
                iconName = 'list';
              } else if (route.name === 'Summary') {
                iconName = 'pie-chart';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Transactions" component={TransactionsStack} />
          <Tab.Screen name="Summary" component={SummaryScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </TransactionsProvider>
  );
}


