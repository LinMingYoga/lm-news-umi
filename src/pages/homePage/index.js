import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
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
  return (
    <>
      {/* <div className={}>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
        </ul>
      </div> */}
      <div className="site-card-wrapper">
        <QueueAnim
          component="Card"
          animConfig={[{ opacity: [1, 0], translateY: [0, 30] }, { height: 0 }]}
          ease={['easeOutQuart', 'easeInOutQuart']}
          duration={[550, 450]}
          interval={150}
        >
          {Cards}
        </QueueAnim>
      </div>
    </>
  );
}

export default HomePage;
