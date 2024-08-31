import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HighLightSection from '../components/HighlightsSection';
import ProfilePostSection from '../components/ProfilePostSection';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.username}>_.supragya._</Text>
        <View style={styles.iconContainer}>
          <Icon name="menu" size={30} color="black" style={styles.icon} />
          <Icon name="add" size={30} color="black" style={styles.icon} />
        </View>
      </View>
      <View style={styles.profile}>
        <Image style={styles.profileImage} />
        <View style={styles.profileStats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>10</Text>
            <Text style={styles.statLabel}>posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>100</Text>
            <Text style={styles.statLabel}>followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>100</Text>
            <Text style={styles.statLabel}>following</Text>
          </View>
        </View>
      </View>
      <View style={styles.bio}>
        <Text style={styles.name}>Supragya Anand</Text>
        <Text>I am a dev</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Share Profile</Text>
        </TouchableOpacity>
      </View>
      <HighLightSection />
      <View style={styles.postUser}>
        <ProfilePostSection />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9ECF3',
  },
  topBar: {
    padding: 10,
    backgroundColor: '#E9ECF3',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
  icon: {
    marginLeft: 15,
  },
  username: {
    flex: 1,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 19,
  },
  profile: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#E9ECF3',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'black',
  },
  profileStats: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  statLabel: {
    fontSize: 12,
    color: 'gray',
  },
  bio: {
    padding: 8,
    marginLeft: 5,
    backgroundColor: '#E9ECF3',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  button: {
    flex: 1,
    backgroundColor: 'gray',
    padding: 7,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
  },
  postUser: {
    flex: 1,
    backgroundColor: '#E9ECF3',
  },
});

export default ProfileScreen;
