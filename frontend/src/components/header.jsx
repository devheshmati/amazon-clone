import symbolset1 from "../assets/images/symbolset1.png";
import MiniIcon from "../components/miniIcon";
import { Icon } from "@iconify/react";
import "../styles/header.scss";

export default function Header() {
  return (
    <>
      <header className="top-header">
        <section className="sec-1">
          <div className="content">
            <div className="col-1">
              <span>
                <MiniIcon
                  img={symbolset1}
                  w={"100px"}
                  h={"40px"}
                  x={"-8px"}
                  y={"-43px"}
                />
              </span>
              <span className="span-2">
                <span className="location-logo">
                  <MiniIcon
                    img={symbolset1}
                    w={"100%"}
                    h={"100%"}
                    x={"-69px"}
                    y={"-379px"}
                  />
                </span>
                <span className="small smoke">Deliver to</span>
                <span className="bold">Select your country</span>
              </span>
            </div>
            <div className="col-2">
              <form>
                <select name="departments" id="departments">
                  <option value="allDepartments">All Departments</option>
                  <option value="arts&crafts">Arts & Crafts</option>
                  <option value="automotive">Automotive</option>
                </select>
                <input type="text" placeholder="Search Amazon" />
                <button type="submit">
                  <MiniIcon
                    img={symbolset1}
                    w={"40px"}
                    h={"40px"}
                    x={"0px"}
                    y={"-281px"}
                  />
                </button>
              </form>
            </div>
            <div className="col-3">
              <span>
                <span>
                  <Icon
                    className="country-flag"
                    icon="twemoji:flag-united-states"
                  />
                  <span className="bold">En</span>
                  <Icon icon="material-symbols:arrow-drop-down" />
                </span>
              </span>
              <span>
                <span className="small">Hello, sign in</span>
                <span>
                  <span className="bold">Account & Lists</span>
                  <Icon icon="material-symbols:arrow-drop-down" />
                </span>
              </span>
              <span>
                <span className="small">Return</span>
                <span className="bold">& Orders</span>
              </span>
              <span>
                <span>
                  <span className="order-num-frame">
                    <span className="order-num bold" id="order-num">
                      0
                    </span>
                    <MiniIcon
                      img={symbolset1}
                      w={"100%"}
                      h={"100%"}
                      x={"-9px"}
                      y={"-334px"}
                    />
                  </span>
                </span>
                <span className="bold">Cart</span>
              </span>
            </div>
          </div>
        </section>
        <section className="sec-2">
          <div className="content">
            <div className="col-1">
              <span>
                <span>
                  <MiniIcon
                    img={symbolset1}
                    w={"21px"}
                    h={"21px"}
                    x={"-171px"}
                    y={"-253px"}
                  />
                </span>
                <span className="bold">All</span>
              </span>
            </div>
            <div className="col-2">
              <ul>
                <li>Today's Deal</li>
                <li>Customer Service</li>
                <li>Registry</li>
                <li>Gift Card</li>
                <li>Sell</li>
              </ul>
            </div>
            <div className="col-3">
              <span className="bold">Shop great deal now</span>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}
