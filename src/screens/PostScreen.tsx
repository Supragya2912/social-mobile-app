import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PostScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Post Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E4E2',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default PostScreen;
