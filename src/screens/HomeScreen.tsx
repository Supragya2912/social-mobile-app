import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const HomeScreen = () => {
  // Create an array with 100 elements
  const items = Array.from({length: 100}, (_, i) => `Home Screen ${i + 1}`);

  return (
    <>
      <View style={styles.tab}>
        <Text style={styles.tabText}>SocialApp</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ScrollView style={styles.content}>
          {items.map((item, index) => (
            <Text key={index} style={styles.contentText}>
              {item}
            </Text>
          ))}
        </ScrollView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  tab: {
    backgroundColor: 'black',
    padding: 10,
  },
  tabText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
  },
  content: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  contentText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10, // Optional: Adds space between text items
  },
});

export default HomeScreen;
