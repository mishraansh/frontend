import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          {/* Logo & Social */}
          <div className="col">
            <img
              src="media/images/logo.svg"
              alt="Zerodha Logo"
              style={{ width: "50%" }}
            />
            <p className="text-muted" style={{ fontSize: "14px" }}>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>

            <span className="d-flex gap-3">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin-in"></i>
            </span>
          </div>

          {/* Company */}
          <div className="col">
            <p className="text-muted">Company</p>
            <Link className="footer-link" to="/about">About</Link><br />
            <Link className="footer-link" to="/product">Product</Link><br />
            <Link className="footer-link" to="/pricing">Pricing</Link><br />
            <Link className="footer-link" to="/referral">Referral programme</Link><br />
            <Link className="footer-link" to="/careers">Careers</Link><br />
            <Link className="footer-link" to="/tech">Zerodha.tech</Link><br />
            <Link className="footer-link" to="/press">Press & media</Link><br />
            <Link className="footer-link" to="/csr">Zerodha cares (CSR)</Link><br />
          </div>

          {/* Support */}
          <div className="col">
            <p className="text-muted">Support</p>
            <Link className="footer-link" to="/contact">Contact</Link><br />
            <Link className="footer-link" to="/support">Support portal</Link><br />
            <Link className="footer-link" to="/blog">Z-Connect blog</Link><br />
            <Link className="footer-link" to="/charges">List of charges</Link><br />
            <Link className="footer-link" to="/downloads">Downloads & resources</Link><br />
          </div>

          {/* Account */}
          <div className="col">
            <p className="text-muted">Account</p>
            <Link className="footer-link" to="/signup">Open an account</Link><br />
            <Link className="footer-link" to="/funds">Fund transfer</Link><br />
            <Link className="footer-link" to="/challenge">60 day challenge</Link><br />
          </div>
        </div>

        {/* Legal text */}
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000031633. Investments in securities market are subject to market
            risks. Read all related documents carefully before investing.
          </p>

          <p>
            Prevent unauthorised transactions in your account. Update your
            mobile number/email with your broker to receive transaction alerts.
          </p>

          {/* Bottom links */}
          <div className="d-flex flex-wrap gap-4 mt-3">
            <Link className="text-muted text-decoration-none" to="/nse">NSE</Link>
            <Link className="text-muted text-decoration-none" to="/bse">BSE</Link>
            <Link className="text-muted text-decoration-none" to="/mcx">MCX</Link>
            <Link className="text-muted text-decoration-none" to="/terms">Terms & Conditions</Link>
            <Link className="text-muted text-decoration-none" to="/policy">Policy & Procedure</Link>
            <Link className="text-muted text-decoration-none" to="/privacy">Privacy Policy</Link>
            <Link className="text-muted text-decoration-none" to="/disclosure">Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
