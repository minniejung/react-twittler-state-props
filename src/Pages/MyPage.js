import React from "react";
import Footer from "../Footer";
import Tweet from "../Components/Tweet";
import "./MyPage.css";
import dummyTweets from "../static/dummyData";

const MyPage = () => {
  const filteredTweets = dummyTweets.filter((tw) => tw.username === "Bob");
  // TODO : 주어진 트윗 목록(dummyTweets)중 현재 유져인 Bob의 트윗만 보여줘야 합니다.
  console.log("filteredTweets", filteredTweets);
  return (
    <section className="myInfo">
      <div className="myInfo__container">
        <div className="myInfo__wrapper">
          <div className="myInfo__profile">
            <img src={filteredTweets[0].picture} />
          </div>
          <div className="myInfo__detail">
            <p className="myInfo__detailName">
              {filteredTweets[0].username} Profile
            </p>
            <p>28 팔로워 100 팔로잉</p>
          </div>
        </div>
      </div>
      <ul className="tweets__mypage">
        {/* TODO : 주어진 트윗 목록(dummyTweets)중 현재 유져인 Bob의 트윗만 보여줘야 합니다. */}
        {filteredTweets.map((tw) => (
          <Tweet key={tw.id} tweet={tw} />
        ))}
      </ul>
      <Footer />
    </section>
  );
};

export default MyPage;
