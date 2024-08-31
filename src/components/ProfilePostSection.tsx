import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Text, StyleSheet} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const Grid = () => (
  <View style={styles.container}>
    <Text>Grid View Posts by User</Text>
  </View>
);

const Reels = () => (
  <View style={styles.container}>
    <Text>Reels Videos by User</Text>
  </View>
);

const TaggedPosts = () => (
  <View style={styles.container}>
    <Text>Tagged Posts</Text>
  </View>
);

const ProfilePostSection = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: { fontSize: 12 },
      tabBarItemStyle: { width: 131},
      tabBarStyle: { backgroundColor: '#E9ECF3' },
      tabBarActiveTintColor: 'black',
      tabBarIndicatorStyle: { backgroundColor: 'black' },
      tabBarScrollEnabled: true,
    }}
    >
      <Tab.Screen name="Grid" component={Grid} />
      <Tab.Screen name="Reels" component={Reels} />
      <Tab.Screen name="Tg" component={TaggedPosts} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9ECF3',
  },
});

export default ProfilePostSection;
