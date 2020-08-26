import React from 'react';
import Layout from '@/layout';
import './index.less';

export default props => {
  return <Layout>{props.children}</Layout>;
};
