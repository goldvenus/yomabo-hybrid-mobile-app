import React from 'react';

import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import { CardView } from '@components/DashBoard';
import { Icon } from '@components/Icon';
import GlobalStyle from '@constants/GlobalStyle';
import { paddingSize, borderRadius, normalizeSize } from '@constants/Layout';
import AppMocData from '@share/MocData';
import GlobalColors from '@constants/Colors';

function Home() {
  return (
    <View style={GlobalStyle.screenContainer}>
      <Header />
      <ScrollView horizontal>
        <View style={styles.cardViews}>
          <CardView>
            <View style={styles.cardTextWrap}>
              <Image
                source={AppMocData.dashBoard.folder}
                style={{ width: 54, height: 42, opacity: 0.3 }} />
            </View>
            <View style={styles.cardTextWrap}>
              <Text style={GlobalStyle.H1}>
                Folders
              </Text>
              <Text style={[GlobalStyle.H4, { paddingTop: 10 }]}>
                231 documents
              </Text>
            </View>
          </CardView>
          <CardView>
            <View style={styles.cardTextWrap}>
              <Text style={GlobalStyle.H1}>
                Our
                {'\n'}
                Mission
              </Text>
              <Text style={[GlobalStyle.H4, { paddingTop: 10 }]}>
                Money in the bank and no paper in a pocket
              </Text>
            </View>
            <View style={{ justifyContent: 'flex-end', width: '100%', flexDirection: 'row' }}>
              <Image source={AppMocData.dashBoard.card1} style={styles.cardImage} resizeMode="cover" />
            </View>
          </CardView>
          <CardView style={{ backgroundColor: GlobalColors.primaryColor }}>
            <View style={styles.cardTextWrap}>
              <Text style={[GlobalStyle.H1, { color: 'white' }]}>
                Add you
                {'\n'}
                portals
              </Text>
              <Text style={[GlobalStyle.H4, { paddingTop: 10, color: 'white' }]}>
                Connect portals and online shops
              </Text>
            </View>
          </CardView>
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
  },
  cardTextWrap: {
    padding: paddingSize.dashCardPadding
  },
  cardImage: {
    height: normalizeSize(80),
    width: normalizeSize(120),
    borderRadius: borderRadius.large
  }
});

export default Home;
