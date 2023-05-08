import MiniIcon from "./miniIcon";
import { Icon } from "@iconify/react";
import "../styles/footer.scss";
import symbolset1 from "../assets/images/symbolset1.png";
import symbolset2 from "../assets/images/symbolset2.png";

export default function Footer() {
  return (
    <>
      <footer>
        <section className="sec-1">
          <button>Back to top</button>
        </section>
        <section className="sec-2">
          <section className="top-sec">
            <div className="col-1">
              <ul>
                <li>
                  <h3>Get to know us</h3>
                </li>
                <li>
                  {/* i should use link component from react-router-dom */}
                  <a href="#">Careers</a>
                </li>
                <li>
                  {/* i should use link component from react-router-dom */}
                  <a href="#">Blog</a>
                </li>
                <li>
                  {/* i should use link component from react-router-dom */}
                  <a href="#">About Amazon</a>
                </li>
                <li>
                  {/* i should use link component from react-router-dom */}
                  <a href="#">Investor Relations</a>
                </li>
                <li>
                  {/* i should use link component from react-router-dom */}
                  <a href="#">Amazon Devices</a>
                </li>
                <li>
                  {/* i should use link component from react-router-dom */}
                  <a href="#">Amazon Science</a>
                </li>
              </ul>
            </div>
            <div className="col-2">
              <ul>
                <li>
                  <h3>Make Money with Us</h3>
                </li>
                <li>
                  <a href="#">Sell products on Amazon</a>
                </li>
                <li>
                  <a href="#">Sell on Amazon Business</a>
                </li>
                <li>
                  <a href="#">Sell apps on Amazon</a>
                </li>
                <li>
                  <a href="#">Become an Affiliate</a>
                </li>
                <li>
                  <a href="#">Advertise Your Products</a>
                </li>
                <li>
                  <a href="#">Self-Publish with Us</a>
                </li>
                <li>
                  <a href="#">Host an Amazon Hub</a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <MiniIcon
                        img={symbolset1}
                        w={"10px"}
                        h={"10px"}
                        x={"-106px"}
                        y={"-359px"}
                      />
                    </span>
                    See More Make Money
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <ul>
                <li>
                  <h3>Amazon Payment Products</h3>
                </li>
                <li>
                  <a href="#">Amazon Business Card</a>
                </li>
                <li>
                  <a href="#">Shop with Points</a>
                </li>
                <li>
                  <a href="#">Reload Your Balance</a>
                </li>
                <li>
                  <a href="#">Amazon Currency Converter</a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <ul>
                <li>
                  <h3>Let Us Help You</h3>
                </li>
                <li>
                  <a href="#">Amazon and COVID-19</a>
                </li>
                <li>
                  <a href="#">Your Account</a>
                </li>
                <li>
                  <a href="#">Your Orders</a>
                </li>
                <li>
                  <a href="#">Shipping Rates & Policies</a>
                </li>
                <li>
                  <a href="#">Returns & Replacements</a>
                </li>
                <li>
                  <a href="#">Manage Your Content and Devices</a>
                </li>
                <li>
                  <a href="#">Amazon Assistant</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
              </ul>
            </div>
          </section>
          <section className="bottom-sec">
            <div className="col-1">
              <span>
                <a href="#">
                  <MiniIcon
                    img={symbolset1}
                    w={"80px"}
                    h={"35px"}
                    x={"-8px"}
                    y={"-84px"}
                  />
                </a>
              </span>
            </div>
            <div className="col-2">
              <span className="span-1">
                <span>
                  <MiniIcon
                    img={symbolset2}
                    w={"15px"}
                    h={"15px"}
                    x={"-77px"}
                    y={"-23px"}
                  />
                </span>
                <span>English</span>
                <span>
                  <span>
                    <MiniIcon
                      img={symbolset2}
                      w={"15px"}
                      h={"15px"}
                      x={"-77px"}
                      y={"-78px"}
                    />
                  </span>
                </span>
              </span>
              <span className="span-2">
                <span>$</span>
                <span>USD-U.S. Dollor</span>
              </span>
              <span className="span-3">
                <span>
                  <MiniIcon
                    img={symbolset2}
                    w={"20px"}
                    h={"15px"}
                    x={"0px"}
                    y={"-131px"}
                  />
                </span>
                <span>United States</span>
              </span>
            </div>
          </section>
        </section>
        <section className="sec-3">
          <section className="top-sec">
            <div className="category-list">
              <a href="#">
                <h4>Title</h4>
                <p>Information</p>
              </a>
              <a href="#">
                <h4>Title</h4>
                <p>Information</p>
              </a>
              <a href="#">
                <h4>Title</h4>
                <p>Information</p>
              </a>
              <a href="#">
                <h4>Title</h4>
                <p>Information</p>
              </a>
              <a href="#">
                <h4>Title</h4>
                <p>Information</p>
              </a>
              <a href="#">
                <h4>Title</h4>
                <p>Information</p>
              </a>
              <a href="#">
                <h4>Title</h4>
                <p>Information</p>
              </a>
              <a href="#">
                <h4>Title</h4>
                <p>Information</p>
              </a>
              <a href="#">
                <h4>Title</h4>
                <p>Information</p>
              </a>
              <a href="#">
                <h4>Title</h4>
                <p>Information</p>
              </a>
              <a href="#">
                <h4>Title</h4>
                <p>Information</p>
              </a>
              <a href="#">
                <h4>Title</h4>
                <p>Information</p>
              </a>
              <a href="#">
                <h4>Title</h4>
                <p>Information</p>
              </a>
              <a href="#">
                <h4>Title</h4>
                <p>Information</p>
              </a>
              <a href="#">
                <h4>Title</h4>
                <p>Information</p>
              </a>
              <a href="#">
                <h4>Title</h4>
                <p>Information</p>
              </a>
              <a href="#">
                <h4>Title</h4>
                <p>Information</p>
              </a>
              <a href="#">
                <h4>Title</h4>
                <p>Information</p>
              </a>
              <a href="#">
                <h4>Title</h4>
                <p>Information</p>
              </a>
              <a href="#">
                <h4>Title</h4>
                <p>
                  This is for test for see what's happend if the text to be long
                </p>
              </a>
              <a href="#">
                <h4>Title</h4>
                <p>Information</p>
              </a>
              <a href="#">
                <h4>Title</h4>
                <p>Information</p>
              </a>
              <a href="#">
                <h4>Title</h4>
                <p>Information</p>
              </a>
              <a href="#">
                <h4>Title</h4>
                <p>Information</p>
              </a>
            </div>
          </section>
          <section className="bottom-sec">
            <div>
              <span>
                <a href="#">Conditions of Use</a>
              </span>
              <span>
                <a href="#">Privacy Notice</a>
              </span>
              <span>
                <a href="#">Your Ads Privacy Choices</a>
              </span>
            </div>
            <div>
              <span>© 1996-2023, Amazon.com, Inc. or its affiliates</span>
            </div>
          </section>
        </section>
      </footer>
    </>
  );
}
