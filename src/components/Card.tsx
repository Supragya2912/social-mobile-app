import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface CardProps {
  name: string;
  avatar: string;
  post: string;
  likes: number;
  comments: number;
  createdAt: string;
  caption: string;
  id: string;
}

const Card = ({name, avatar, post, likes, caption}: CardProps) => {
  console.log('from card component', avatar);
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image source={{uri: avatar}} style={styles.profileImage} />
        <Text style={styles.username}>{name}</Text>
        <TouchableOpacity style={styles.moreOptions}>
          <Icon name="ellipsis-horizontal" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* Post Image */}
      <Image source={{uri: post}} style={styles.postImage} />

      {/* Action Buttons */}
      <View style={styles.actions}>
        <TouchableOpacity>
          <Icon
            name="heart-outline"
            size={24}
            color="black"
            style={styles.actionIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="chatbubble-outline"
            size={24}
            color="black"
            style={styles.actionIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="paper-plane-outline"
            size={24}
            color="black"
            style={styles.actionIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveIcon}>
          <Icon name="bookmark-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Likes Count */}
      <Text style={styles.likes}>Liked by {likes} others</Text>

      {/* Caption */}
      <View style={styles.caption}>
        <Text style={styles.username}>{name} </Text>
        <Text style={styles.captionText}>
         {caption}
        </Text>
      </View>

      {/* Time */}
      <Text style={styles.time}>2 hours ago</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    flex: 1,
  },
  moreOptions: {
    padding: 5,
  },
  postImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  actions: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  actionIcon: {
    marginRight: 15,
  },
  saveIcon: {
    marginLeft: 'auto',
  },
  likes: {
    fontWeight: 'bold',
  },
  caption: {
    flexDirection: 'row',
  },
  captionText: {
    flex: 1,
  },
  time: {
    color: 'gray',
    marginTop: 5,
  },
});

export default Card;
