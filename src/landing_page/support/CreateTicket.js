import React from "react";
import { Link } from "react-router-dom";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-3">To create a ticket, select a relevant topic</h1>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4 style={{ position: "relative", right: "50px" }} className="fs-5 text-center">
            <i className="fa fa-plus-circle"></i> Account Opening
          </h4>
          <br />
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }} to="/support/online-account-opening">
            Online Account Opening
          </Link>
          <br />
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }} to="/support/offline-account-opening">
            Offline Account Opening
          </Link>
          <br />
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }} to="/support/company-partnership-huf">
            Company, Partnership and HUF Account
          </Link>
          <br />
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }} to="/support/opening">
            Opening
          </Link>
          <br />
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }} to="/support/nri-account">
            NRI Account Opening
          </Link>
          <br />
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }} to="/support/charges">
            Charges at Zerodha
          </Link>
          <br />
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }} to="/support/idfc-3in1">
            Zerodha IDFC FIRST Bank 3-in-1 Account
          </Link>
          <br />
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }} to="/support/getting-started">
            Getting Started
          </Link>
          <br />
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4 style={{ position: "relative", right: "30px" }} className="fs-5 text-center">
            <i className="fa-solid fa-circle-user"></i> Your Zerodha Account
          </h4>
          <br />
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }} to="/support/login-credentials">
            Login Credentials
          </Link>
          <br />
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }} to="/support/account-modification">
            Account Modification and Segment Addition
          </Link>
          <br />
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }} to="/support/dp-bank-details">
            DP ID and bank details
          </Link>
          <br />
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }} to="/support/profile">
            Your Profile
          </Link>
          <br />
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }} to="/support/shares-transform">
            Transform and conversion of shares
          </Link>
          <br />
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4 style={{ position: "relative", right: "30px" }} className="fs-5 text-center">
            <i className="fa-solid fa-signal"></i> Your Zerodha Account
          </h4>
          <br />
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }} to="/support/margin-leverage">
            Margin/leverage, Product and Order types
          </Link>
          <br />
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }} to="/support/kite-web-mobile">
            Kite Web and Mobile
          </Link>
          <br />
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }} to="/support/trading-faqs">
            Trading FAQs
          </Link>
          <br />
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }} to="/support/corporate-actions">
            Corporate Actions
          </Link>
          <br />
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }} to="/support/sentinel">
            Sentinel
          </Link>
          <br />
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }} to="/support/kite-api">
            Kite API
          </Link>
          <br />
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }} to="/support/pi-platform">
            Pi and other platform
          </Link>
          <br />
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }} to="/support/stackerports">
            Stockerports+
          </Link>
          <br />
          <Link style={{ textDecoration: "none", lineHeight: "2.5" }} to="/support/gtt">
            GTT
          </Link>
          <br />
        </div>

       
      </div>
    </div>
  );
}

export default CreateTicket;
