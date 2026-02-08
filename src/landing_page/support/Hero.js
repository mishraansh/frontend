import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3 " id="supportWrapper">
        <h4 className="fs-4 mt-2">Support Portal</h4>
        <a className="mt-2" href="">
          {" "}
          Track Tickets
        </a>
      </div>
      <div className="row  p-5 my-3">
        <div className="col-6 p-3 ">
          <h1 className="fs-4">
            Search for an answer or browse help topics <br /> to create a ticket
          </h1>
          <input
            className="mt-3 mb-3"
            placeholder="Eg. how do I activate F&O , why is order getting rejected"
          />
          <br />
          <a href="">Track account opening</a>
          <a className="m-2" href="">
            {" "}
            Track Segment activation
          </a>
          <a href="">Intraday margin</a>
          <br />
          <a href="">Kite user manual</a>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Tekeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a style={{ lineHeight: 2.5 }} href="">
                Latest Intraday leverage - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
