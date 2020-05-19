import React from 'react';
import { View, ScrollView } from 'react-native';
import { Header } from '../common';
import { DocCard } from '@components/Document';
import { DocumentData } from './DummyData';

const Document = () => (
  <View>
    <Header title="Documents" />
    <ScrollView horizontal>
      <View style={{ flexDirection: 'row' }}>
        {
        DocumentData.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <DocCard title={item.title} description={item.description} key={`document_${index}`} />
        ))
      }
      </View>
    </ScrollView>
  </View>
);

export default Document;
