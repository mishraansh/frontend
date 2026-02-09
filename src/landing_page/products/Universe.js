import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms.
        </p>
      </div>

      <div className="row text-center mt-5">
        <div className="col-4 p-3">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase Logo"
            style={{ width: "200px", height: "60px" }}
          />
          <p className="m-2 text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/streakLogo.png"
            alt="Streak Logo"
            style={{ width: "200px", height: "60px" }}
          />
          <p className="m-2 text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull Logo"
            style={{ width: "200px", height: "60px" }}
          />
          <p className="m-2 text-muted">Options trading platform</p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Fundhouse Logo"
            style={{ width: "200px", height: "60px" }}
          />
          <p className="m-2 text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/goldenpiLogo.png"
            alt="GoldenPi Logo"
            style={{ width: "200px", height: "60px" }}
          />
          <p className="m-2 text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto Logo"
            style={{ width: "200px", height: "60px" }}
          />
          <p className="m-2 text-muted">Insurance</p>
        </div>
      </div>

      <div className="text-center">
        <button
          className="p-3 mt-5 btn btn-primary fs-5 mb-5"
          style={{ width: "25%" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
