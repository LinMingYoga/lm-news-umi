import React from 'react';
import styles from './index.less';
import { Layout } from 'antd';
import Search from '@/components/search';
const {
  Header,
  Footer,
  Content
} = Layout;
function LayOut(props) {
  return (
    <Layout className={styles.lmPage}>
      <Header className={styles.lmHeader} >
        <Search />
      </Header>
      <Content className={styles.content}>
        <div className={styles.w}>
          {props.children}
        </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}
export default LayOut