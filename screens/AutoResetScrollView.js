// components/AutoResetScrollView.js
import React, { useRef } from 'react';
import { ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const AutoResetScrollView = ({ children, ...props }) => {
  const scrollRef = useRef(null);

  useFocusEffect(
    React.useCallback(() => {
      scrollRef.current?.scrollTo({ y: 0, animated: false });
    }, [])
  );

  return (
    <ScrollView ref={scrollRef} {...props}>
      {children}
    </ScrollView>
  );
};

export default AutoResetScrollView;
