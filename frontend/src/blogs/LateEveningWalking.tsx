import './Blog.css';
import React from 'react';
import walking1 from '../img/walking1.jpg';
import walking2 from '../img/walking2.jpg';
import walking3 from '../img/walking3.jpg';
import walking4 from '../img/walking4.jpg';
import walking5 from '../img/walking5.jpg';
import street from '../img/street.jpg';

class LateEveningWalking extends React.Component {
  render() {
    return (
      <body>
        <div className="App">
            <p className='header'>傍晚散步 Late Evening Walking</p>
            <div className='blog-content'>
                <p className='blog-date'>8/16/2022</p>
                <p>今天下班，吃完饭，看完老友记，如常去海边走。坐在公园牙子边轻声絮语聊天，聊未来展望，聊人生观念想法。天边原来是半亮着的，
                  也慢慢的暗下去，黑了。远方有雾，迷迷蒙蒙的淡粉橙色，随着天黑慢慢的沉下去。对岸伯克利的山坡上初有建筑物玻璃上的夕阳闪光，
                  后来变成桥上锁链一波一波的闪银光，最后变成桥上对岸的灯火。一切宁静美好。
                </p>
                <p>I got off work today, finished my meal, watched Friends, and went to walk along the water as usual. Sitting by the side of
                   the park, I was chatting softly with my partner, talking about future prospects, and life concepts and ideas. The sky 
                   was half-lit, but it slowly darkened, darkened. There was fog in the distance, a hazy pale pinkish orange, 
                   slowly sinking as it gets dark. On the hillside of Berkeley on the other side of the bay, the setting sun glitters on the
                   glass of the building. Later, it turned into a wave of silver light from the chains on the bridge, and finally
                   turned into the lights on the bridge and on the other side. Everything is peaceful and beautiful.</p>
                <img src={walking3} className='blog-img-horizontal'></img>
                <img src={walking1} className='blog-img-horizontal'></img>
                <img src={walking2} className='blog-img-horizontal'></img>
                <img src={walking4} className='blog-img-horizontal'></img>
                <img src={walking5} className='blog-img-horizontal'></img>
                <img src={street} className='blog-img-vertical'></img>
            </div>
        </div>
      </body>
    );
  }
}

export default LateEveningWalking;
