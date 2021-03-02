import React from "react";
import { Carousel, Image } from "antd";
import { UserOutlined } from "@ant-design/icons";
function Home() {
  const contentStyle = {
    height: "300px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",

  };

  return (
    <>
      <div className="top-img-container">
        <img
          className="top-img-exterior"
          src={require("../imgs/exterior.jpg")}
          alt=""
        />
        <div className="top-img-title">TRBC</div>
      </div>
      <br />
      <br />

      <Carousel autoplay>
        <div >
          <Image
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%",
              height:"300px"
            }}
            src="http://www.trbc.org.sg/english/images/Images/CombinedChurchCamp_2019_Mobile.jpg"
          />
        </div>
        <div>
          <Image
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%",
              height:"80%"
            }}
            src="https://trbccec.files.wordpress.com/2020/08/trbc-cec-2020-snapshot-.png"
          />
        </div>
        <div style={contentStyle}>
          <Image src="http://www.trbc.org.sg/images/Images/English_Invite_Come__Celebrate_Christmas_1_Dec.png" />
        </div>
      </Carousel>
    </>
  );
}

export default Home;
