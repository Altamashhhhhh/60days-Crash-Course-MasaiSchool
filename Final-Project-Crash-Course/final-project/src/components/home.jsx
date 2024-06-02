import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="main">
        <section className="home-header">
          <div></div>
          <div className="overlay">
            <h1>We help cannabis clubs find real estate</h1>
            <p>
              Founded by a former city planner and a cannabis industry pioneer,
              our team has decades of experience finding and permitting
              properties for cannabis businesses. We understand the unique
              challenges and opportunities of the cannabis industry, and we're
              here to help you succeed.
            </p>
            <div className="buttons">
              <button className="learnmore">Learn More</button>
              <button className="signup">Sign Up</button>
            </div>
          </div>
        </section>

        <h1>How We Help</h1>

        <div className="hwh">
          {/* hwh stand for how we help */}
          <div>
            <img
              src="https://img.freepik.com/free-photo/beautiful-kitchen-interior-design_23-2150976584.jpg"
              alt=""
            />
            <p>Find The Perfect Location</p>
            <span>
              Our team will help you find the ideal location for your cannabis
              club, with a focus on foot traffic, visibility, and local
              demographics.
            </span>
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/id/470309868/photo/explosion-nuclear-bomb-in-ocean.jpg?s=612x612&w=0&k=20&c=gA9WPuNBPkpox4bNZcPBit-A0HkxmTpYsHKYlNiX8z8="
              alt=""
            />
            <p>Get help with permits</p>
            <span>
              Navigating the complex web of regulations and permits can be
              daunting. We'll help you understand the process and get it done
              right.
            </span>
          </div>
          <div>
            <img
              src="https://c8.alamy.com/comp/2E02DDW/poinciana-tree-delonix-regia-large-tropical-deciduous-summer-flowering-tree-covered-with-flame-red-flowers-under-blue-sky-in-queensland-australia-2E02DDW.jpg"
              alt=""
            />
            <p>Work with experienced consultants</p>
            <span>
              Our consultants have deep expertise in the cannabis industry and a
              track record of success. We'll provide guidance on everything from
              branding to compliance.
            </span>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2t5c2NyYXBlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <p>Get a free consultation</p>
            <span>
              Schedule a free consultation with our team and learn how we can
              help you achieve your goals.
            </span>
          </div>
        </div>

        <div className="tbc">
          <h1>Trusted by Top Cannabis brand</h1>
          <div className="images">
            <img
              src="https://t3.ftcdn.net/jpg/01/99/91/56/360_F_199915609_6xAzDmN24eHzj5jM4a9nL7yBTyNOX8CU.jpg"
              alt=""
            />
            <img
              src="https://images-platform.99static.com//TDf5I7oOB8EWNAN0ddC9djzdeAc=/105x109:855x859/fit-in/590x590/99designs-contests-attachments/95/95171/attachment_95171757"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf34-CEvBtNVICmogpDoh9fBuAGATRL4qM4eIixxQY0Q&s"
              alt=""
            />
            <img
              src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1631/posts/34758/image/Logo%20Generator%20for%20a%20Cannabis%20Infusions%20Store%20copy.jpg"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHye72USN0zfoF08gEpUY-DDPU0Nb17ImjJqdN6KdFOg&s"
              alt=""
            />
          </div>
        </div>

        <div style={{textAlign:"center" , marginTop:"100px ", width : "70%"  , fontWeigth:"700"  }}>
          <h1>Ready to take the next step ?</h1>
          <p style={{textAlign:"left"}}>
            We'll help you find the perfect location for your cannabis club,
            navigate the complex web of regulations and permits, and provide
            guidance on everything from branding to compliance.
          </p>
          <button className="consultation"> Schedule a free consultation</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
