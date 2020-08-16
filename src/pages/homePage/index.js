import React, { useEffect, useState } from 'react';
import { Card, BackTop } from 'antd';
import './index.less';
import QueueAnim from 'rc-queue-anim';
import $http from '@/api';

// const { Meta } = Card

function HomePage() {
  const [data, setData] = useState([]);

  function getNews(keyword) {
    setData([]);
    $http.getNews(keyword).then(res => {
      let data = res.data.list;
      setData(data);
    });
  }

  useEffect(() => {
    getNews('news');
  }, []);

  function filteKey(num) {
    return String.fromCharCode(num + 65);
  }

  function toggle(index) {
    console.log('index', index);
    active = index;
    console.log('active', active);
  }

  let Cards = data.map((item, index) => {
    return (
      <Card hoverable key={filteKey(index)}>
        <div>
          <img
            style={{ display: 'block', width: '100%' }}
            alt={item.title}
            src={item.image}
          />
        </div>
        <h3>
          <a href={item.url}>{item.title}</a>
        </h3>
        <p>{item.brief}</p>
      </Card>
    );
  });
  const items = [
    {
      label: '新闻',
      value: 'news',
    },
    {
      label: '国内',
      value: 'china',
    },
    {
      label: '国际',
      value: 'world',
    },
    {
      label: '社会',
      value: 'society',
    },
    {
      label: '法治',
      value: 'law',
    },
    {
      label: '文娱',
      value: 'ent',
    },
    {
      label: '科技',
      value: 'tech',
    },
    {
      label: '生活',
      value: 'life',
    },
    {
      label: '经济',
      value: 'economy',
    },
    {
      label: '教育',
      value: 'edu',
    },
    {
      label: '健康',
      value: 'health',
    },
  ];
  var active = 0;
  const tabs = items.map((item, index) => {
    return (
      <li
        className={index === active ? 'active' : ''}
        onClick={() => {
          toggle(index);
        }}
        value={item.value}
        key={index}
      >
        {item.label}
      </li>
    );
  });
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
  return (
    <>
      <div className="lm-news">
        <div className="lm-news-native">
          <ul>{tabs}</ul>
        </div>
        <div className="site-card-wrapper">
          <QueueAnim
            component="Card"
            animConfig={[
              { opacity: [1, 0], translateY: [0, 30] },
              { height: 0 },
            ]}
            ease={['easeOutQuart', 'easeInOutQuart']}
            duration={[550, 450]}
            interval={150}
          >
            {Cards}
          </QueueAnim>
          <BackTop>
            <div style={style}>UP</div>
          </BackTop>
        </div>
      </div>
    </>
  );
}

export default HomePage;
