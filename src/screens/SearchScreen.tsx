import React from 'react';
import { View, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ExploreGrid} from '../components/ExploreGrid';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="gray" style={styles.icon} />
          <TextInput
            style={styles.inputText}
            placeholder="Search"
            placeholderTextColor="gray"
          />
        </View>
      </SafeAreaView>

      <ExploreGrid />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9ECF3',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  icon: {
    marginRight: 10,
  },
  inputText: {
    flex: 1,
    height: 40,
  },
});

export default SearchScreen;
