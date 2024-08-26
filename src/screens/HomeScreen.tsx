import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Card from '../components/Card';
import useGetPosts from '../hooks/useGetPosts';
import StorySection from '../components/StorySection';

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
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.content}
        ListHeaderComponent={<StorySection />}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9ECF3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab: {
    backgroundColor: '#E9ECF3',
    padding: 10,
  },
  tabText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily:'sans-serif',
    color: 'black',
  },
  content: {
    backgroundColor: '#E9ECF3',
  },
});

export default HomeScreen;
