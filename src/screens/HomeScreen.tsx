import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Card from '../components/Card';
import useGetPosts from '../hooks/useGetPosts';

const HomeScreen = () => {
  const { posts, loading, error } = useGetPosts();


  // Show a loading spinner or text while loading
  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  // Handle the error case
  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  const renderItem = ({ item }: { item: any }) => (
    <Card
      name={item.name}
      avatar={item.avatar}
      post={item.post}
      likes={item.likes}
      comments={item.comments}
      createdAt={item.createdAt}
        caption={item.caption}
      id={item.id}
    />
  );

  return (
    <>
      <View style={styles.tab}>
        <Text style={styles.tabText}>SocialApp</Text>
      </View>
      <FlatList
        data={posts} // Use the posts data from the API
        renderItem={renderItem} // Function to render each item
        keyExtractor={(item) => item.id} // Unique key for each item
        contentContainerStyle={styles.content} // Style for the FlatList's content container
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
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
    padding: 20,
    backgroundColor: 'white',
  },
});

export default HomeScreen;
