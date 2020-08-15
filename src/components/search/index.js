import React from 'react';
import { AutoComplete, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './index.less';
function Search() {
  return (
    <>
      <AutoComplete className={styles.lmSearch} placeholder="input here" />
      <Button className={styles.lmBtn} type="primary" icon={<SearchOutlined />}>
        搜索
      </Button>
    </>
  );
}

export default Search;
