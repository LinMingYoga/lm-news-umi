import React, {useState} from 'react';
import $http from '@/api';
import { AutoComplete, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './index.less';
function Search() {
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState('')

  function getOptions(str) {
    return new Promise((resolve, reject) => {
      $http.getOptions(str).then(res => {
        resolve(res)
      })
    })
  }

  var timeout = null

  function myoptions(str) {
    if (str === '') {
      return
    }
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      getOptions(str).then(res => {
        let data = res.map(item => {
          return {
            value: item.q
          }
        })
        setOptions(!str ? [] : data);
      })
    }, 1000)

  }

  const inputChange = (data) => {
    setValue(data)
  }

  const onSelect = data => {
    window.open(`https://www.baidu.com/s?wd=${data}`)
  }
  const Tosearch = () => {
    window.open(`https://www.baidu.com/s?wd=${value}`)
  }
  return (
    <>
      <AutoComplete
        className={styles.lmSearch}
        onSelect={onSelect}
        onSearch={myoptions}
        options={options}
        allowClear
        onChange={inputChange}
        value={value}
        placeholder="百度一下，你就知道！"
      />
      <Button
        onClick = {Tosearch}
        className = {styles.lmBtn}
        type = "primary"
        icon = {< SearchOutlined />} >
        搜索
      </Button>
    </>
  );
}

export default Search;
