import React from "react";
import { Link } from "react-router-dom";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} alt={productName} />
        </div>

        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            {/* Use Link if internal route, otherwise keep <a> */}
            {tryDemo.startsWith("/") ? (
              <Link to={tryDemo} style={{ textDecoration: "none" }}>
                Try Demo <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            ) : (
              <a href={tryDemo} style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                Try Demo <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            )}

            {learnMore.startsWith("/") ? (
              <Link
                to={learnMore}
                style={{ marginLeft: "70px", textDecoration: "none" }}
              >
                Learn More <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            ) : (
              <a
                href={learnMore}
                style={{ marginLeft: "70px", textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            )}
          </div>

          <div className="mt-3">
            <a href={googlePlay} target="_blank" rel="noopener noreferrer">
              <img src="media/images/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a
              href={appStore}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "50px" }}
            >
              <img src="media/images/appstoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
