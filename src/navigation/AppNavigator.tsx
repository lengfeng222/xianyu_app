import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.panel}>
        <Text style={styles.title}>AI Zhi Cai</Text>
        <Text style={styles.subtitle}>The app shell was rebuilt from the available project files.</Text>
        <Text style={styles.body}>
          The original src directory was missing from this project copy, so this build includes a minimal
          launch screen to keep the Android package installable.
        </Text>
      </View>
    </ScrollView>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f7f8fa',
  },
  panel: {
    gap: 14,
    padding: 22,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    borderColor: '#d8dee8',
    borderWidth: StyleSheet.hairlineWidth,
  },
  title: {
    color: '#171923',
    fontSize: 28,
    fontWeight: '700',
  },
  subtitle: {
    color: '#2f3747',
    fontSize: 16,
    fontWeight: '600',
  },
  body: {
    color: '#5b6577',
    fontSize: 14,
    lineHeight: 22,
  },
});
