import React from 'react';

import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { CardView } from '@components/DashBoard';
import GlobalStyle from '@constants/GlobalStyle';
import { paddingSize } from '@constants/Layout';

function Home() {
  return (
    <View style={GlobalStyle.screenContainer}>
      <Header />
      <ScrollView horizontal>
        <View style={styles.cardViews}>
          <CardView />
          <CardView />
          <CardView />
          <CardView />
        </View>
      </ScrollView>
    </View>
  );
}

const Header = () => (
  <View style={styles.header}>
    <View>
      <Text style={GlobalStyle.description}>Ole Klaenfoth</Text>
      <Text style={GlobalStyle.title}>Dashboard</Text>
    </View>
    <View style={styles.icons}>
      <Text>Search</Text>
      <Text>Notification</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: paddingSize.screen,
    paddingTop: paddingSize.screenTop,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardViews: {
    flexDirection: 'row',
    paddingLeft: paddingSize.screen,
    paddingTop: 27
  },
  icons: {
    flexDirection: 'row',
  }
});

export default Home;
