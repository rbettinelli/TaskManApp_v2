import React from 'react';
import {View} from 'react-native';

const PageHeader = (props: any) => {
  const {children} = props;
  return <View>{children}</View>;
};

export default PageHeader;
