import React from "react";
import profile from "../img/logo.jpg";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import { Link } from "react-router-dom";
// import like from "../img/like.png";
// import chat from "../img/chat.png";
// import share from "../img/share.png";
function Main() {
  return (
    <div>
      <Link to="/">
        <div className="container">
          <div className="adss-block">
            <div className="ads-info">
              <div className="ads-logo">
                <img src={profile} alt="" />
              </div>
              <div>
                <div className="ads-name">Khalid Aliev</div>
                <div className="ads-desc">
                  покупался 2 года назад,не бит не крашен,полный фарш.продаю так
                  как нужны деньги
                  <span className="read-more"> еще...</span>
                </div>
                <div className="ads-tags">#dodge</div>
              </div>
              <div className="ads-follow">follow</div>
            </div>
            <div className="title">Dodge challenger 2017</div>
            <div className="ads-img">
              <ImageSlider slides={SliderData} />
            </div>
            <div className="ads-options">
              <div className="mark">марка: dodge </div>
              <div className="model">модель: challenger</div>
              <div className="price">цена: 7.000.000 p</div>
              <div className="color">цвет: Черный</div>
              <div className="year">год: 2016</div>
              <div className="wheel">руль: правый</div>
              <div className="mileage">пробег: 16.000 км</div>
            </div>
          </div>
        </div>
      </Link>
      <div className="container">
        <div className="adss-block">
          <div className="ads-info">
            <div className="ads-logo">
              <img src={profile} alt="" />
            </div>
            <div>
              <div className="ads-name">Бачаев Умар</div>
              <div className="ads-desc">
                покупался 2 года назад,не бит не крашен,полный фарш.продаю так
                как нужны деньги <span className="read-more">еще...</span>
              </div>
              <div className="ads-tags">#porshe</div>
            </div>
            <div className="ads-follow">follow</div>
          </div>
          <div className="title">porshe 911 2021</div>
          <div className="ads-img">
            <ImageSlider slides={SliderData} />
          </div>
          <div className="ads-options">
            <div className="mark">марка: dodge </div>
            <div className="model">модель: challenger</div>
            <div className="price">цена: 7.000.000 p</div>
            <div className="color">цвет: Черный</div>
            <div className="year">год: 2016</div>
            <div className="wheel">руль: правый</div>
            <div className="mileage">пробег: 16.000 км</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="adss-block">
          <div className="ads-info">
            <div className="ads-logo">
              <img src={profile} alt="" />
            </div>
            <div>
              <div className="ads-name">Бачаев Умар</div>
              <div className="ads-desc">
                покупался 2 года назад,не бит не крашен,полный фарш.продаю так
                как нужны деньги <span className="read-more">еще...</span>
              </div>
              <div className="ads-tags">#samara</div>
            </div>
            <div className="ads-follow">follow</div>
          </div>
          <div className="title">samara 2114</div>
          <div className="ads-img">
            <img src="https://94.img.avito.st/1280x960/4497766294.jpg" alt="" />
          </div>
          <div className="ads-options">
            <div className="mark">марка: dodge </div>
            <div className="model">модель: challenger</div>
            <div className="price">цена: 7.000.000 p</div>
            <div className="color">цвет: Черный</div>
            <div className="year">год: 2016</div>
            <div className="wheel">руль: правый</div>
            <div className="mileage">пробег: 16.000 км</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="adss-block">
          <div className="ads-info">
            <div className="ads-logo">
              <img src={profile} alt="" />
            </div>
            <div>
              <div className="ads-name">Бачаев Умар</div>
              <div className="ads-desc">
                покупался 2 года назад,не бит не крашен,полный фарш.продаю так
                как нужны деньги <span className="read-more">еще...</span>
              </div>
              <div className="ads-tags">#mercedes</div>
            </div>
            <div className="ads-follow">follow</div>
          </div>
          <div className="title">mercedes-benz w124</div>
          <div className="ads-img">
            <img src="https://a.d-cd.net/da6154as-960.jpg" alt="" />
          </div>
          <div className="ads-options">
            <div className="mark">марка: dodge </div>
            <div className="model">модель: challenger</div>
            <div className="price">цена: 7.000.000 p</div>
            <div className="color">цвет: Черный</div>
            <div className="year">год: 2016</div>
            <div className="wheel">руль: правый</div>
            <div className="mileage">пробег: 16.000 км</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
