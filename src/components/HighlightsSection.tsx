import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Story {
  id: string;
  username: string;
  imageUri: string;
}

const storiesData: Story[] = [
  { id: '1', username: 'Highlight', imageUri: 'https://loremflickr.com/cache/resized/65535_53848295095_808fb4dd83_c_640_480_nofilter.jpg' },
  { id: '2', username: 'Highlight', imageUri: 'https://loremflickr.com/cache/resized/65535_52688291677_2d1961dfaa_b_640_480_nofilter.jpg' },
  { id: '3', username: 'Highlight', imageUri: 'https://loremflickr.com/cache/resized/65535_52691101566_5c508c6790_z_640_480_nofilter.jpg' },
  { id: '4', username: 'Highlight', imageUri: 'https://loremflickr.com/cache/resized/65535_52691101566_5c508c6790_z_640_480_nofilter.jpg' },
  { id: '5', username: 'Highlight', imageUri: 'https://loremflickr.com/cache/resized/65535_52691101566_5c508c6790_z_640_480_nofilter.jpg' },
  { id: '6', username: 'Highlight', imageUri: 'https://loremflickr.com/cache/resized/65535_52691101566_5c508c6790_z_640_480_nofilter.jpg' },
  { id: '7', username: 'Highlight', imageUri: 'https://loremflickr.com/cache/resized/65535_52691101566_5c508c6790_z_640_480_nofilter.jpg' },
];

export const HighLightSection: React.FC = () => {
    const renderItem = ({ item }: { item: Story }) => (
      <TouchableOpacity style={styles.storyContainer}>
        <LinearGradient
          colors={['#000000', '#8d9797', '#4e545c']}
          style={styles.gradient}
        >
          <Image source={{ uri: item.imageUri }} style={styles.storyImage} />
        </LinearGradient>
        <Text style={styles.username}>{item.username}</Text>
      </TouchableOpacity>
    );

    return (
      <View style={styles.container}>
        <FlatList
          data={storiesData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
      marginTop: 10,
      marginBottom: 15,
    },
    storyContainer: {
      alignItems: 'center',
      marginHorizontal: 10,
    },
    gradient: {
      width: 74,
      height: 74,
      borderRadius: 37,
      justifyContent: 'center',
      alignItems: 'center',
    },
    storyImage: {
      width: 68,
      height: 68,
      borderRadius: 34,
      borderWidth: 2,
      borderColor: 'white',
    },
    username: {
      marginTop: 5,
      fontSize: 12,
      color: '#333',
      textAlign: 'center',
    },
  });
export default HighLightSection;
