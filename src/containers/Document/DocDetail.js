import React from 'react';
import { View, Image } from 'react-native';
import GlobalStyle from '@constants/GlobalStyle';
import { DetailHeader, DocToolBar } from '@components/Document';
import AppMocData from '@share/MocData';

function DocDetail({ navigation }) {
  const { title, docId } = navigation.state.params;
  return (
    <View style={GlobalStyle.screenContainer}>
      <DetailHeader title={title} docId={docId} image={AppMocData.Icons.listItem} Back={() => navigation.navigate('Document')} />
      <Image
        source={AppMocData.doc.docTemp}
        style={{
          width: '100%',
          height: '100%'
        }} />
      <DocToolBar />
    </View>
  );
}

export default DocDetail;
