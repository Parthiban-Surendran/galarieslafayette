// components/AutoResetFlatList.js
import React, { useRef } from 'react';
import { FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const AutoResetFlatList = ({ ...props }) => {
  const listRef = useRef(null);

  useFocusEffect(
    React.useCallback(() => {
      listRef.current?.scrollToOffset({ offset: 0, animated: false });
    }, [])
  );

  return <FlatList ref={listRef} {...props} />;
};

export default AutoResetFlatList;
