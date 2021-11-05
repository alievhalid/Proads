import React from "react";
import profile from "../img/profile.png";
function Main() {
  return (
    <div className="container">
      <div className="ads-info">
        <div className="ads-logo">
          <img src={profile} alt="" />
        </div>
        <div>
          <div className="ads-name">Dimbel Lebmid</div>
          <div className="ads-desc">
            Metal detectors to greet her every morning. She doesn’t belong here
            but glad she’s seeing the consequences to an action ещё...
          </div>
          <div className="ads-tags">#toyota #lada #bmw #2020 #new</div>
        </div>
        <div className="ads-follow">follow</div>
      </div>
      <div className="ads-img">
        <img src='https://img2.goodfon.ru/wallpaper/nbig/f/e3/dodge-challenger-srt8-forgiato.jpg' alt="" />
      </div>
      <div className="ads-options">
          <div className="name">название: dodge challenger</div>
          <div className="price">цена:7.000.000</div>
          <div className="color">цвет: black</div>
          <div className="year">год выпуска: 2017</div>
      </div>
    </div>
  );
}

export default Main;
