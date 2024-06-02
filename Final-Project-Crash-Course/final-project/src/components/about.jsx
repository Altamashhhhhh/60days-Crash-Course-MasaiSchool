import React from "react";
import "./about.css";

const About = () => {
  return (
    <div>
      <div className="main">
        <section className="header">
          <h1>Welcome to Europeans Grains</h1>
          <p>
            We are a leading grain and oilseed trading company operating in the
            European Union
          </p>
        </section>

        <h1>About Us</h1>
        <p>
          Founded in 2010, European Grains has emerged as one of Europe's
          leading grain and related trading companies. Our business is based on
          our strong relationships with producers and consumers and our ability
          to supply high-quality products. We have built a reputation for
          quality, integrity, and innovation, and we are committed to helping
          our customers succeed. Our mission is to be the most trusted center
          for our customers and suppliers, providing them with the best products
          and services. We are dedicated to building long-term relationships and
          creating value for all stakeholders. We believe in the importance of
          sustainability and are committed to ensuring that our business
          practices are environmentally and socially responsible. We are
          continuously working to improve our operations and reduce our impact
          on the environment
        </p>

        <h1>Our Product </h1>

        <div className="product">
          <div>
            <img
              src="https://cdn.britannica.com/90/94190-050-C0BA6A58/Cereal-crops-wheat-reproduction.jpg"
              alt=""
            />
            <p>Wheat</p>
          </div>

          <div>
            <img
              src="https://eu-images.contentstack.com/v3/assets/bltdd43779342bd9107/blt006fab3bb643e10a/638f88af61513f11fb7fce62/IrlbeckRyeHarvest161_20copy.jpg?width=850&auto=webp&quality=95&format=jpg&disable=upscale"
              alt=""
            />
            <p>Rye</p>
          </div>

          <div>
            <img
              src="https://media.post.rvohealth.io/wp-content/uploads/2020/07/What%E2%80%99s-the-Difference-Between-Barley-and-Wheat-02-1200x628.jpg"
              alt=""
            />
            <p>Barley</p>
          </div>

          <div>
            <img
              src="https://vajiramandravi.s3.us-east-1.amazonaws.com/media/2022/4/10/11/43/44/maizeee.jpg"
              alt=""
            />
            <p>Maize</p>
          </div>

          <div>
            <img
              src="https://www.mundus-agri.eu/images/news/cache/12570_landscape_large.jpg"
              alt=""
            />
            <p>Oilseeds</p>
          </div>

          <div>
            <img src="https://static.toiimg.com/photo/63797959.cms" alt="" />
            <p>Wheat Flour</p>
          </div>

          <div>
            <img
              src="https://www.greendna.in/cdn/shop/products/wheat-bran-1559202048-4930438_1200x1200.jpg?v=1591099250"
              alt=""
            />
            <p>Wheat Bran</p>
          </div>

          <div>
            <img
              src="https://www.thesoapkitchen.co.uk/img/cms/wheatgerm-kernels.jpg"
              alt=""
            />
            <p>Wheat Germ</p>
          </div>

          <div>
            <img
              src="https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2022-02/rye-flour%C2%A9iStock.jpg"
              alt=""
            />
            <p>Rye Flour</p>
          </div>

          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMtyE2jXZAZWDRlnFJsGXITXJn1TQJ0Nx9qTIoBVxdUg&s"
              alt=""
            />
            <p>Barley Flour</p>
          </div>

          <div>
            <img
              src="https://www.galaxysivtek.com/wp-content/uploads/2022/11/maize-flour.jpg"
              alt=""
            />
            <p>Maize Flour</p>
          </div>

          <div>
            <img
              src="https://media.istockphoto.com/id/1171674904/photo/roasted-or-grilled-sweet-corn-cobs-with-garlic-butter-and-lime.jpg?s=170667a&w=is&k=20&c=YoWViqpZ_sGhgP6Xq9PSfrfWUj-JLTHCtTbim4OXuLc="
              alt=""
            />
            <p>Maize Meal</p>
          </div>

          <div>
            <img
              src="https://intensivecakeunit.com/wp-content/uploads/2020/09/Sunflower-Cake-YouTube.jpg"
              alt=""
            />
            <p>Sunflower Cake</p>
          </div>

          <div>
            <img
              src="https://hillfarmoils.com/wp-content/uploads/2019/10/VS_0807_sq-1024x1024.jpg"
              alt=""
            />
            <p>Rapeseed Cake</p>
          </div>

          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA92wKK5T8psrk0qyvWPQrkcUUNcwvvV_lAnm79-1EIA&s"
              alt=""
            />
            <p>Soybean Meal</p>
          </div>

          <div>
            <img
              src="https://img.freepik.com/premium-photo/beauty-soybean-corn-field-hill-sunset_40185-189.jpg"
              alt=""
            />
            <p>Soybean Hulls</p>
          </div>
        </div>

        <h1>Delivery and packaging</h1>
        <p>
          We offer a range of delivery and packaging options to meet your needs.
          Our products can be delivered in bulk or in bags, and we can provide
          custom packaging solutions if required. We work with a network of
          trusted transport partners to ensure that your order is delivered on
          time and in perfect condition. If you have any specific requirements,
          please let us know, and we will do our best to accommodate them.
        </p>

        <h1>Contact Us</h1>

        <form action="#">
          <label htmlFor="yourname">
            Your Name <br /> <input type="text" name="" id="" />
          </label>{" "}
          <br /> <br />
          <label htmlFor="youremail">
            Your Email <br /> <input type="text" />{" "}
          </label>{" "}
          <br /> <br />
          <label htmlFor="yourmessage">
            {" "}
            Your Message <br />
            <textarea name="" id="" cols={15} rows={5}></textarea>
          </label>{" "}
          <br /> <br />
          
        </form>
        <input
            type="button"
            value="Send"
            style={{
              backgroundColor: "rgb(26, 223, 82)",
              width: "10%",
              float : "right " , 
              padding : "10px " ,
              border : "none " , 
              fontWeight : "700" , 
              borderRadius: "7px",
            }}
          />
      </div>
    </div>
  );
};

export default About;
