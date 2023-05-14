import SectionLink from "./sectionLink";
import MiniIcon from "./miniIcon";
import MiniSectionLink from './miniSectionLink';
import { Icon } from "@iconify/react";
import "../styles/footer.scss";
import symbolset1 from "../assets/images/symbolset1.png";
import symbolset2 from "../assets/images/symbolset2.png";

export default function Footer() {
  const sectionLinkData = [
    {
      id: 1,
      title: "Get to Know Us",
      links: [
        {
          id: 1,
          title: "Careers",
          url: "#",
          arrowSign: false,
        },
        {
          id: 2,
          title: "Blog",
          url: "#",
          arrowSign: false,
        },
        {
          id: 3,
          title: "About Amazon",
          url: "#",
          arrowSign: false,
        },
        {
          id: 4,
          title: "Investor Relations",
          url: "#",
          arrowSign: false,
        },
        {
          id: 5,
          title: "Amazon Devices",
          url: "#",
          arrowSign: false,
        },
        {
          id: 6,
          title: "Amazon Sience",
          url: "#",
          arrowSign: false,
        },
      ],
    },
    {
      id: 2,
      title: "Make Money with Us",
      links: [
        {
          id: 1,
          title: "Sell products on Amazon",
          url: "#",
          arrowSign: false,
        },
        {
          id: 2,
          title: "Sell on Amazon Business",
          url: "#",
          arrowSign: false,
        },
        {
          id: 3,
          title: "Sell apps on Amazon",
          url: "#",
          arrowSign: false,
        },
        {
          id: 4,
          title: "Become an Affiliate",
          url: "#",
          arrowSign: false,
        },
        {
          id: 5,
          title: "Advertise Your Products",
          url: "#",
          arrowSign: false,
        },
        {
          id: 6,
          title: "Self-Publish with Us",
          url: "#",
          arrowSign: false,
        },
        {
          id: 7,
          title: "Host an Amazon Hub",
          url: "#",
          arrowSign: false,
        },
        {
          id: 8,
          title: "See More Make Money with Us",
          url: "#",
          arrowSign: true,
        },
      ],
    },
    {
      id: 3,
      title: "Amazon Payment Product",
      links: [
        {
          id: 1,
          title: "Amazon Business Card",
          url: "#",
          arrowSign: false,
        },
        {
          id: 2,
          title: "Shop with Points",
          url: "#",
          arrowSign: false,
        },
        {
          id: 3,
          title: "Reload Your Balance",
          url: "#",
          arrowSign: false,
        },
        {
          id: 4,
          title: "Amazon Currency Converter",
          url: "#",
          arrowSign: false,
        },
      ],
    },
    {
      id: 4,
      title: "Let Us Help You",
      links: [
        {
          id: 1,
          title: "Amazon and COVID-19",
          url: "#",
          arrowSign: false,
        },
        {
          id: 2,
          title: "Your Account",
          url: "#",
          arrowSign: false,
        },
        {
          id: 3,
          title: "Your Orders",
          url: "#",
          arrowSign: false,
        },
        {
          id: 4,
          title: "Shipping Rates & Policies",
          url: "#",
          arrowSign: false,
        },
        {
          id: 5,
          title: "Returns & Replacements",
          url: "#",
          arrowSign: false,
        },
        {
          id: 6,
          title: "Manage Your Content and Devices",
          url: "#",
          arrowSign: false,
        },
        {
          id: 7,
          title: "Amazon Assistant",
          url: "#",
          arrowSign: false,
        },
        {
          id: 8,
          title: "Help",
          url: "#",
          arrowSign: false,
        },
      ],
    },
  ];
  const miniSectionLinkData = [
    {id: 1, title: 'Amazon Music', context: 'Stream millions'},
    {id: 2, title: 'Amazon Advertising', context: 'Find, attract, and engage customers'},
    {id: 3, title: 'Gpm', context: 'Score deals on fashion brands'},
    {id: 4, title: 'AbeBooks', context: 'Books, art & collections'},
    {id: 5, title: 'ACX', context: 'Audiobook Publishing Made Easy'},
    {id: 6, title: 'Sell on Amazon', context: 'Start a Selling Account'},
    {id: 7, title: 'Amazon Business', context: 'Everything For Your Business'},
    {id: 8, title: 'AmazonGlobal', context: 'Ship Orders Internationally'},
    {id: 9, title: 'Home Services', context: 'Experienced Pros Happiness Guarantee'},
    {id: 10, title: 'Amazon Ignite', context: 'Sell your orginal Digital Educational Resources'},
    {id: 11, title: 'Amazon Web Services', context: 'Scalable Cloud Computing Services'},
    {id: 12, title: 'Audible', context: 'Listen to Books & Orginal Audio Performances'},
    {id: 13, title: 'Book Depository', context: 'Books With Free Delivery Worldwide'},
    {id: 14, title: 'Box Office Mojo', context: 'Find Movie Box Office Data'},
    {id: 15, title: 'ComiXology', context: 'Thousands of Digital Comics'},
    {id: 16, title: 'DPReview', context: 'Digital Photography'},
    {id: 17, title: 'Fabric', context: 'Sewing, Quilting & Knitting'},
    {id: 18, title: 'Goodreads', context: 'Book reviews & recommendations'},
    {id: 19, title: 'IMDb', context: 'Movies, TV & Celebrities'},
    {id: 20, title: 'IMDbPro', context: 'Get Info Entertainment'},
    {id: 21, title: 'Kindle Direct Publishing', context: 'Indie Digital & Print Publishing Made Easy'},
    {id: 22, title: 'Prime Video Direct', context: 'Video Distributation Made Easy'},
    {id: 23, title: 'Shopbop', context: 'Designer Fashion Brands'},
    {id: 24, title: 'Woot!', context: 'Deals and Shenanigans'},
    {id: 25, title: 'Zappos', context: 'Shoes & Clothing'},
    {id: 26, title: 'Ring', context: 'Smart Home Security Systems'},
    {id: 27, title: 'eero WiFi', context: 'Stream 4K Video in Every Room'},
    {id: 28, title: 'Blink', context: 'Smart Security for Every Home'},
    {id: 29, title: 'Neighbors App', context: 'Real-Time Crime & Safety Alerts'},
    {id: 30, title: 'Amazon Subscription Boxes', context: 'Top subscription boxes - right to your door'},
    {id: 31, title: 'PillPack', context: 'Pharmacy Simplified'},
  ];

  return (
    <>
      <footer>
        <section className="sec-1">
          <button>Back to top</button>
        </section>
        <section className="sec-2">
          <section className="top-sec">
            {sectionLinkData.map((item) => (
              <SectionLink key={item.id} item={item} />
            ))}
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
            <MiniSectionLink data={miniSectionLinkData}/>
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
