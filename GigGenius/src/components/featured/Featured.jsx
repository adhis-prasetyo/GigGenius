import React from "react";
import "./Featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>freelance</span> services for your business
          </h1>

          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder='Try "building mobil app"' />
            </div>
            <button>Search</button>
          </div>

          <div className="popular">
            <span>Popular:</span>
            <button>
              <a href="/gigs?cat=design">Web Design</a>
            </button>
            <button>
              {" "}
              <a href="/gigs?cat=design">WordPress</a>
            </button>
            <button>
              <a href="/gigs?cat=design">Logo Design</a>
            </button>
            <button>
              <a href="/gigs?cat=design">AI Services</a>
            </button>
          </div>
        </div>

        <div className="right">
          <img src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
