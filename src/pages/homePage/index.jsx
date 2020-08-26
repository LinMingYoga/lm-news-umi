import React, { useEffect, useState } from 'react';
import { Card, Affix, Image } from 'antd';
import './index.less';
import QueueAnim from 'rc-queue-anim';
import $http from '@/api';
import failImage from '@/assets/images/fail.png';

function HomePage() {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(0);
  const [state, setState] = useState(false);
  const [top, setTop] = useState(0);
  const [bgc, setBgc] = useState(false);

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
  const tabs = items.map((item, index) => {
    return (
      <li
        className="lm-topItem"
        className={active === index ? 'active' : ''}
        onClick={() => {
          toggle(index, item.value);
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
  const filteKey = num => {
    return String.fromCharCode(num + 65);
  };
  var timeout = null;
  const toggle = (index, value) => {
    setState(true);
    clearTimeout(timeout);
    console.log('value', value);
    timeout = setTimeout(() => {
      setActive(index);
      getNews(value);
      console.log('active', active);
    }, 1000);
  };
  const getNews = keyword => {
    setData([]);
    $http.getNews(keyword).then(res => {
      let data = res.data.list;
      setData(data);
      setState(false);
    });
  };
  const affixChange = affixed => {
    console.log('affixed', affixed);
    affixed ? setBgc(true) : setBgc(false);
  };

  useEffect(() => {
    getNews('news');
  }, []);
  return (
    <div className="w">
      <div className="lm-news">
        <Affix offsetTop={top} onChange={affixChange}>
          <div className={`${bgc ? 'lm-active' : ''} lm-news-native`}>
            <ul>{tabs}</ul>
          </div>
        </Affix>
        <QueueAnim
          animConfig={[{ opacity: [1, 0], translateY: [0, 30] }, { height: 0 }]}
          ease={['easeOutQuart', 'easeInOutQuart']}
          duration={[550, 450]}
          interval={150}
        >
          <div className="site-card-wrapper">
            {data.map((item, index) => {
              return (
                <Card
                  className="lm-card-item"
                  hoverable="true"
                  key={index}
                  cover={
                    <Image
                      style={{ display: 'block', width: '100%' }}
                      alt={item.title}
                      src={item.image}
                      fallback={failImage}
                    />
                  }
                >
                  <h3>
                    <a href={item.url}>{item.title}</a>
                  </h3>
                  <p>{item.brief}</p>
                </Card>
              );
            })}
          </div>
        </QueueAnim>
      </div>
    </div>
  );
}

export default HomePage;
