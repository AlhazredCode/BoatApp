import { View, Text, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import Feed from '../stacknavigation/Feed';
import PagerView from 'react-native-pager-view';
import MenuButton from '../../components/MenuButton';
import Ride from '../stacknavigation/Ride';
import Header from '../../components/Header'; 

const Home = () => {
  const [activePage, setActivePage] = useState(0);

  const handlePageSelected = (e) => {
    setActivePage(e.nativeEvent.position);
  };

  return (
    <>
    <SafeAreaView flex={1}> 
      <Header typeNavigation="primary" activePage={activePage} /> 
      <PagerView flex={1} initialPage={0} onPageSelected={handlePageSelected}>
        <View key="1">
          <Feed />
        </View>
        <View key="2">
          <Ride />
        </View>
      </PagerView>
      <MenuButton />
      </SafeAreaView>
    </>
  );
};

export default Home;