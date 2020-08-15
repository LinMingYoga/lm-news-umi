import React from 'react';
import styles from './index.less';
import { Layout, Row, Col, BackTop } from 'antd';
import Search from '@/components/search';
import { Scrollbars } from 'react-custom-scrollbars';
const { Header, Footer, Content } = Layout;
function LayOut(props) {
  return (
    <Layout className={styles.lmPage}>
      <Header className={styles.lmHeader}>
        <Search />
      </Header>
      <Scrollbars>
        <Content className={styles.content}>
          <div className={styles.w}>{props.children}</div>
        </Content>
      </Scrollbars>
      {/* <Footer>Footer</Footer> */}
    </Layout>
  );
}
export default LayOut;
