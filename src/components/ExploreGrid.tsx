import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { ResponsiveGrid } from 'react-native-flexible-grid';

// Define the type for your data items
interface DataItem {
  imageUrl: string;
  widthRatio?: number;
  heightRatio?: number;
}


  const data: DataItem[] = [
    {
      imageUrl: 'https://picsum.photos/200/300?random=1',
    },
    {
      imageUrl: 'https://picsum.photos/200/300?random=2',
    },
    {
      imageUrl: 'https://picsum.photos/200/300?random=3',
      widthRatio: 1,
      heightRatio: 2,
    },
    {
        imageUrl: 'https://picsum.photos/200/300?random=4',
        widthRatio: 1,
        heightRatio: 2,
      },
      {
        imageUrl: 'https://picsum.photos/200/300?random=5',
        widthRatio: 1,
        heightRatio: 2,
      },
      {
        imageUrl: 'https://picsum.photos/200/300?random=6',
        widthRatio: 1,
        heightRatio: 2,
      },
      {
        imageUrl: 'https://picsum.photos/200/300?random=7',
        widthRatio: 1,
        heightRatio: 2,
      },
      {
        imageUrl: 'https://picsum.photos/200/300?random=8',
        widthRatio: 1,
        heightRatio: 2,
      },
      {
        imageUrl: 'https://picsum.photos/200/300?random=9',
        widthRatio: 1,
        heightRatio: 2,
      },
      {
        imageUrl: 'https://picsum.photos/200/300?random=11',
        widthRatio: 1,
        heightRatio: 2,
      },
      {
        imageUrl: 'https://picsum.photos/200/300?random=12',
        widthRatio: 1,
        heightRatio: 2,
      },
      {
        imageUrl: 'https://picsum.photos/200/300?random=13',
        widthRatio: 1,
        heightRatio: 2,
      },
      {
        imageUrl: 'https://picsum.photos/200/300?random=14',
        widthRatio: 1,
        heightRatio: 2,
      },
      {
        imageUrl: 'https://picsum.photos/200/300?random=15',
        widthRatio: 1,
        heightRatio: 2,
      },
      {
        imageUrl: 'https://picsum.photos/200/300?random=16',
        widthRatio: 1,
        heightRatio: 2,
      },
      {
        imageUrl: 'https://picsum.photos/200/300?random=17',
        widthRatio: 2,
        heightRatio: 2,
      },
      {
        imageUrl: 'https://picsum.photos/200/300?random=18',
        widthRatio: 1,
        heightRatio: 1,
      },
      {
        imageUrl: 'https://picsum.photos/200/300?random=19',
        widthRatio: 1,
        heightRatio: 1,
      },
      {
        imageUrl: 'https://picsum.photos/200/300?random=20',
        widthRatio: 1,
        heightRatio: 1,
      },
      {
        imageUrl: 'https://picsum.photos/200/300?random=21',
        widthRatio: 1,
        heightRatio: 1,
      },
  ];

 export const ExploreGrid: React.FC = () => {

  const renderItem = ({ item }: {item: DataItem}) => (
    <View style={styles.boxContainer}>
      <Image
        source={{ uri: item.imageUrl }}
        style={styles.box}
        resizeMode="cover"
      />
    </View>
  );

  return (
    <View style={styles.gridContainer}>
      <ResponsiveGrid
        maxItemsPerColumn={3}
        data={data}
        renderItem={renderItem}
        style={styles.gridd}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    flex: 1,
    margin: 1,
  },
  gridContainer:{
    flex: 1,
    backgroundColor: '#E9ECF3',
  },
  gridd: {
    padding: 5,
  },
  box: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  }
});
