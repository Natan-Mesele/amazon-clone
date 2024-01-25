import React from "react";
import './Home.css'
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71nwqPZaNRL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product 
          id="12321341"
          title="Toys under" 
          price={25}
          image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v5._SY304_CB573698005_.jpg'
          rating={5}
          />
          <Product 
          id="49538894"
          title="Beauty steals under" 
          price={25}
          image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg'
          rating={5}
          />
        </div>
        <div className="home__row">
        <Product 
          id="12321341"
          title="Lunar New Year" 
          price={25}
          image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/LunarNY/Fuji_Single_card_Lunar_New_Year_Graphics_1x_EN._SY304_CB585956471_.jpg'
          rating={5}
          />
          <Product 
          id="49538894"
          title="Player's paradise starts here" 
          price={25}
          image='https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1546843_2940864_379x304_1X_en_US._SY304_CB613273467_.jpg'
          rating={5}
          />
          <Product 
          id="12321341"
          title="Gaming merchandise" 
          price={25}
          image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mug_1x._SY116_CB667159063_.jpg'
          rating={5}
          />
         
        </div>
        <div className="home__row">
          <Product 
            id="49538894"
            title="A whole new way to work" 
            price={25}
            image='https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1622892_3373436_379x304_1X_en_US._SY304_CB597161294_.jpg'
            rating={5}
            />
        </div>
      </div>
    </div>
  );
}

export default Home;
