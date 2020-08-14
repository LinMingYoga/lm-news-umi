import React, {useEffect , useState} from 'react';
import { List, Card } from 'antd';
import './index.less';
import $http from '@/api';

// const { Meta } = Card

function HomePage() {
  // const arr = [1,2,3,4,5,6,7,8,9]
  // const cardItem = arr.map(item => {
  //       return <Card
  //       cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  //       bordered={false}>
  //       <div>
  //         <Meta title="Europe Street beat" description="www.instagram.com" />
  //       </div>
  //     </Card>
  //   })
  const [data, setData] = useState([])

  function getWangyi (keyword) {
    setData([])
    $http.getNews(keyword).then(res => {
      let data = res.data.list
      setData(data)
    })
  }

  useEffect(() => {
    getWangyi('news')
  }, [])

  let Cards = data.map(item => {
    return <Card style={{ width: 300 }}>
        <div>
          <img  style={{display:'block', width: '100%'}} alt={item.title} src={item.image} />
        </div>
        <p><a href={item.url}>{item.title}</a></p>
        <p>{item.brief}</p>
      </Card>
  })
  return (
    <div className="site-card-wrapper">
      {/* <List
          itemLayout="vertical"
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              actions={[<div>{item.focus_date}</div>]}
              extra={<img width={300} alt={item.title} src={item.image} />}
            >
              <List.Item.Meta
                title={<a href={item.url}>{item.title}</a>}
                description={item.brief}
              />
            </List.Item>
          )}
        /> */}
        {
          Cards
        }
    </div>
  )
}

export default HomePage