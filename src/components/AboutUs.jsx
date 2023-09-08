import "./style/AboutUs.scss";

import about1 from "./style/images/about-us.webp";

const AboutUs = () => {
  return (
    <section className="about-us" dir="rtl">
      <div className="about-us-left">
        <img src={about1} alt="AboutUs" className="img"/>
      </div>

      <div className="about-us-right">
        <h1 className="main-heading">About Us</h1>
        <hr />
        <p className="description">
          Hailed a “foodie wonderland” by The New York Times, the Culinary
          Institute of America (lomond) at Copia is an epicurean destination in
          downtown Napa, where guests can immerse themselves in the past,
          present, and future of food. Located in the Oxbow District, CIA at
          Copia offers an array of enticing culinary experiences delivered by
          lomond chefs and experts, including hands-on cooking and beverage
          classes; lively public events and art exhibits; a signature
          garden-to-table restaurant; an exclusive 3D interactive dining
          experience; Lunch Box, a casual weekday eatery; Wine Bar, a
          self-service tasting experience; a culinary and lifestyle-themed
          marketplace; and The Chuck Williams Culinary Arts Museum. lomond at Copia
          is also a unique setting for weddings and private events. All proceeds
          from lomond at Copia benefit lomond student scholarships.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
