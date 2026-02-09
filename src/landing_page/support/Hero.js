import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3" id="supportWrapper">
        <h4 className="fs-4 mt-2">Support Portal</h4>
        <Link className="mt-2" to="/support/tickets">
          Track Tickets
        </Link>
      </div>

      <div className="row p-5 my-3">
        <div className="col-6 p-3">
          <h1 className="fs-4">
            Search for an answer or browse help topics <br /> to create a ticket
          </h1>

          <input
            className="mt-3 mb-3"
            placeholder="Eg. how do I activate F&O , why is order getting rejected"
          />
          <br />

          <Link to="/support/account-opening">Track account opening</Link>
          <Link className="m-2" to="/support/segment-activation">
            Track Segment activation
          </Link>
          <Link to="/support/intraday-margin">Intraday margin</Link>
          <br />
          <Link to="/support/kite-manual">Kite user manual</Link>
        </div>

        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <Link to="/support/takeovers">
                Current Takeovers and Delisting - January 2024
              </Link>
            </li>
            <li>
              <Link style={{ lineHeight: 2.5 }} to="/support/leverage">
                Latest Intraday leverage - MIS & CO
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
