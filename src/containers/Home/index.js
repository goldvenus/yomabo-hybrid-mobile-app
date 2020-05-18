import React from 'react';

import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { CardView } from '@components/DashBoard';
import { Icon } from '@components/Icon';
import GlobalStyle from '@constants/GlobalStyle';
import { paddingSize } from '@constants/Layout';
import AppMocData from '@share/MocData';
import GlobalColors from '@constants/Colors';

function Home() {
  return (
    <View style={GlobalStyle.screenContainer}>
      <Header />
      <ScrollView horizontal>
        <View style={styles.cardViews}>
          <CardView>
            <Text style={GlobalStyle.H1}>
              Our Mission
            </Text>
            <Text style={[GlobalStyle.H4, { paddingTop: 10 }]}>
              Money in the bank and no paper in a pocket
            </Text>
          </CardView>
          <CardView style={{ backgroundColor: GlobalColors.primaryColor }}>
            <Text style={[GlobalStyle.H1, { color: 'white' }]}>
              Our Mission
            </Text>
            <Text style={[GlobalStyle.H4, { paddingTop: 10, color: 'white' }]}>
              Money in the bank and no paper in a pocket
            </Text>
          </CardView>
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
      <Icon imageUrl={AppMocData.Icons.search} marginRight={23} />
      <Icon imageUrl={AppMocData.Icons.notification} />
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
