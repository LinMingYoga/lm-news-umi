import React from 'react';
import styles from './index.less';
import { Layout, BackTop, Button } from 'antd';
import Search from '@/components/search';
import { GithubOutlined } from '@ant-design/icons';
const { Header, Footer, Content } = Layout;
function LayOut(props) {
  const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  };
  const toGithub = () => {
    window.open('https://github.com/LinMingYoga/lm-news-umi');
  };
  return (
    <Layout className={styles.lmPage}>
      <Header className={styles.lmHeader}>
        <Search />
      </Header>
      <Content className={styles.content}>
        <div>{props.children}</div>
      </Content>
      <BackTop>
        <div style={style}>UP</div>
      </BackTop>
      <Footer className={styles.lmFooter}>
        <Button type="link" onClick={toGithub} icon={<GithubOutlined />}>
          @LinMingYoga
        </Button>
      </Footer>
    </Layout>
  );
}
export default LayOut;
