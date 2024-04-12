/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';

const App = (): React.JSX.Element => {
  const data = Array.from({ length: 32 }).map((_, index) => ({ key: String(index) }));

  const renderItem = () => {
    return <View style={styles.rectangle}></View>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        numColumns={4}
        contentContainerStyle={styles.flatListContainer}
      />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  /* put your styling here */ 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1d1f29',
  },
  flatListContainer: {
    padding: 16,
  },
  rectangle: {
    width: 50,
    height: 50,
    backgroundColor: '#f5b502',
    margin: 8,
  },

});

export default App;
