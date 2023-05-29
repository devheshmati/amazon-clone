import Header from "../components/header";
import Footer from "../components/footer";
import Main from "../components/main";
import Container from "../components/container";
import MainSlider from "../components/mainSlider";
import InfoLink from "../components/infoLink";
import Gapper from "../components/gapper";
import CategoryCard from "../components/categoryCard";
import { smokeyFadeBackground } from "../styles/modules/fadeBackground.module.scss";
import ProductCarousel from "../components/productCarousel";

export default function HomePage() {
  const sliderData = [
    {
      url: "#1",
      img: "slide1.jpg",
      alt: "slidr1 image alt",
    },
    {
      url: "#2",
      img: "slide2.jpg",
      alt: "slidr2 image alt",
    },
    {
      url: "#3",
      img: "slide3.jpg",
      alt: "slidr3 image alt",
    },
    {
      url: "#4",
      img: "slide4.jpg",
      alt: "slide4 image alt",
    },
    {
      url: "#5",
      img: "slide5.jpg",
      alt: "slide5 image alt",
    },
    {
      url: "#6",
      img: "slide6.jpg",
      alt: "slide6 image alt",
    },
  ];

  const categoryData1 = [
    {
      type: "card",
      title: "Gaming accessories",
      quadImg: [
        {
          title: "Headsets",
          img: "Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg",
          url: "#productId",
          imgAlt: "Fuji headset image",
        },
        {
          title: "Keyboards",
          img: "Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg",
          url: "#productId",
          imgAlt: "Fuji keyboard image",
        },
        {
          title: "Computer mice",
          img: "Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg",
          url: "#productId",
          imgAlt: "Fuji mouse image",
        },
        {
          title: "Chairs",
          img: "Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg",
          url: "#productId",
          imgAlt: "Fuji mouse image",
        },
      ],
      titleLink: "See more",
      url: "#",
    },
    {
      type: "card",
      title: "Shop deals in Fashion",
      quadImg: [
        {
          title: "Jeans under $50",
          img: "DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg",
          url: "#productId",
          imgAlt: "DQC jean image",
        },
        {
          title: "Tops under $25",
          img: "DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg",
          url: "#productId",
          imgAlt: "DQC Top image",
        },
        {
          title: "Dresses under $30",
          img: "DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg",
          url: "#productId",
          imgAlt: "DQC dress image",
        },
        {
          title: "Jeans Shoes under $50",
          img: "DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg",
          url: "#productId",
          altImg: "DQC shoes image",
        },
      ],
      titleLink: "See more",
      url: "#",
    },
    {
      type: "card",
      title: "Top Deal",
      img: "41pkIf-VesL._AC_SY230_.jpg",
      imgAlt: "This is alt for image",
      isDiscount: true,
      discount: {
        count: 50,
        isTopDeal: true,
        context: "Shaving and Writing Essentials from Bic",
      },
      titleLink: "See all deals",
      url: "#",
    },
    // {
    //   type: "card",
    //   title: "Beauty picks",
    //   img: "Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg",
    //   imgAlt: "Fuji Dash Beauty image",
    //   imgLink: "#imgLink",
    //   isDiscount: false,
    //   titleLink: "Shop now",
    //   url: "#cardItem",
    // },
    {
      type: "ads",
      title: "Sign in for the best experience",
      btnUrl: "#",
      btnTitle: "Sign in securely",
      adUrl: "#",
      adImg: "Fuji_D2_45M_en_US_1x._CB418309979_.jpg",
      adImgAlt: "img4 test picture",
    },
  ];

  const categoryData2 = [
    {
      type: "card",
      title: "Easy updates for elevated spaces",
      quadImg: [
        {
          title: "Baskets & hampers",
          img: "2023Q2_GW_EE_LaundryLuxe_D_Quad_186x116._SY116_CB594237035_.jpg",
          url: "#productId",
          imgAlt: "GW_EE Laundry Luxer D_Quad image",
        },
        {
          title: "Hardware",
          img: "2023Q2_GW_EE_Kitchen_D_Quad_186x116._SY116_CB594237035_.jpg",
          url: "#productId",
          imgAlt: "GW_EE Kitchen D_Quad image",
        },
        {
          title: "Accent furniture",
          img: "2023Q2_GW_EE_AccentFurniture_D_Quad_186x116._SY116_CB594237035_.jpg",
          url: "#productId",
          imgAlt: "GW_EE Accent Furniture D_Quad image",
        },
        {
          title: "Chairs",
          img: "2023Q2_GW_EE_Hallway_D_Quad_186x116._SY116_CB594237035_.jpg",
          url: "#productId",
          imgAlt: "GW_EE Hallway D_Quad image",
        },
      ],
      titleLink: "Shop home products",
      url: "#",
    },
    {
      type: "card",
      title: "Refresh your space",
      quadImg: [
        {
          title: "Dining",
          img: "DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg",
          url: "#productId",
          imgAlt: "DesktopQuadCat LP-HP image",
        },
        {
          title: "Home",
          img: "DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg",
          url: "#productId",
          imgAlt: "DesktopQuadCat Home image",
        },
        {
          title: "Kitchen",
          img: "DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg",
          url: "#productId",
          imgAlt: "DesktopQuadCat image",
        },
        {
          title: "Health and Beauty",
          img: "DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg",
          url: "#productId",
          altImg: "DesktopQuadCat health-beauty image",
        },
      ],
      titleLink: "See more",
      url: "#",
    },
    {
      type: "card",
      title: "Beauty picks",
      img: "Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg",
      imgAlt: "Fuji Dash Beauty image",
      imgLink: "#imgLink",
      isDiscount: false,
      titleLink: "Shop now",
      url: "#cardItem",
    },
    {
      type: "card",
      title: "Electronics",
      img: "Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg",
      imgAlt: "Fuji Dash Electronics image",
      imgLink: "#imgLink",
      isDiscount: false,
      titleLink: "See more",
      url: "#cardItem",
    },
  ];

  const productCarouselData1 = {
    type: "product",
    category: "Gadgets and accessories",
    isLink: false,
    products: [
      {
        id: 1,
        img: "41LDpBUiYkL._AC_SY200_.jpg",
        imgAlt: "Asus TUF Gaming Monitor image",
        price: 249.0,
        isDiscount: false,
        discount: { count: 40, isTopDeal: false },
        isTitle: false,
        title: "product title",
      },
      {
        id: 2,
        img: "31-RegrbOmL._AC_SY200_.jpg",
        imgAlt: "GM Genuine parts image",
        price: 249.0,
        isDiscount: false,
        discount: { count: 40, isTopDeal: false },
        isTitle: false,
        title: "GM Genuine Parts",
      },
      {
        id: 3,
        img: "41uQytOwFtL._AC_SY200_.jpg",
        imgAlt: "OtterBox Utility image",
        price: 249.0,
        isDiscount: false,
        discount: { count: 40, isTopDeal: false },
        isTitle: false,
        title: "OtterBox Utility",
      },
      {
        id: 4,
        img: "41N73lRh-9L._AC_SY200_.jpg",
        imgAlt: "Metra image",
        price: 249.0,
        isDiscount: false,
        discount: { count: 40, isTopDeal: false },
        isTitle: false,
        title: "Metra",
      },
      {
        id: 5,
        img: "41WkAu6UJLL._AC_SY200_.jpg",
        imgAlt: "MSI Gaming Geforce RTX 3050 8GB image",
        price: 249.0,
        isDiscount: false,
        discount: { count: 40, isTopDeal: false },
        isTitle: false,
        title: "MSI Gaming Geforce RTX 3050 8GB",
      },
      {
        id: 6,
        img: "31mEzHVS37L._AC_SY200_.jpg",
        imgAlt: "Tripp Lite TLP604 4Ft image",
        price: 249.0,
        isDiscount: false,
        discount: { count: 40, isTopDeal: false },
        isTitle: false,
        title: "Tripp Lite TLP604 4Ft",
      },
      {
        id: 7,
        img: "31XG2nkWMjL._AC_SY200_.jpg",
        imgAlt: "Furman AC-215A Compact Power image",
        price: 249.0,
        isDiscount: false,
        discount: { count: 40, isTopDeal: false },
        isTitle: false,
        title: "Furman AC-215A Compact Power",
      },
      {
        id: 8,
        img: "31lnwnQH7VL._AC_SY200_.jpg",
        imgAlt: "Creative SBS E2900 image",
        price: 249.0,
        isDiscount: false,
        discount: { count: 40, isTopDeal: false },
        isTitle: false,
        title: "Creative SBS E2900",
      },
      {
        id: 9,
        img: "41EKwVfO5IL._AC_SY200_.jpg",
        imgAlt: "Monoprice DVI-D Single Link Male image",
        price: 249.0,
        isDiscount: false,
        discount: { count: 40, isTopDeal: false },
        isTitle: false,
        title: "Monoprice DVI-D Single Link Male",
      },
      {
        id: 10,
        img: "31UY41fDmyL._AC_SY200_.jpg",
        imgAlt: "Brady LAT-39-361-1 image",
        price: 249.0,
        isDiscount: false,
        discount: { count: 40, isTopDeal: false },
        isTitle: false,
        title: "Brady LAT-39-361-1",
      },
      {
        id: 11,
        img: "313Vt-B6HiL._AC_SY200_.jpg",
        imgAlt: "VELCRO Brand-ONE-WRAP image",
        price: 249.0,
        isDiscount: false,
        discount: { count: 40, isTopDeal: false },
        isTitle: false,
        title: "VELCRO Brand-ONE-WRAP",
      },
      {
        id: 12,
        img: "41LF1aeNrIL._AC_SY200_.jpg",
        imgAlt: "Fellowes Smart Sultes Laptop image",
        price: 249.0,
        isDiscount: false,
        discount: { count: 40, isTopDeal: false },
        isTitle: false,
        title: "Fellowes Smart Sultes Laptop",
      },
      {
        id: 13,
        img: "31UfTfHX7TL._AC_SY200_.jpg",
        imgAlt: "Speck Products Presidio2 Grip Samsung Galexy S22 image",
        price: 249.0,
        isDiscount: false,
        discount: { count: 40, isTopDeal: false },
        isTitle: false,
        title: "Speck Products Presidio2 Grip Samsung Galexy S22",
      },
      {
        id: 14,
        img: "41VSelRmOgL._AC_SY200_.jpg",
        imgAlt: "uxcell Rubber Strain Relief image",
        price: 249.0,
        isDiscount: false,
        discount: { count: 40, isTopDeal: false },
        isTitle: false,
        title: "uxcell Rubber Strain Relief",
      },
      {
        id: 15,
        img: "21oNW-+PcOL._AC_SY200_.jpg",
        imgAlt: "Cobra Products LP14SOC Cable image",
        price: 249.0,
        isDiscount: false,
        discount: { count: 40, isTopDeal: false },
        isTitle: false,
        title: "Cobra Products LP14SOC Cable",
      },
      {
        id: 16,
        img: "41SEX3Fn90L._AC_SY200_.jpg",
        imgAlt: "NHT SuperZero 2.1 Preimium image",
        price: 249.0,
        isDiscount: false,
        discount: { count: 40, isTopDeal: false },
        isTitle: false,
        title: "NHT SuperZero 2.1 Preimium",
      },
      {
        id: 17,
        img: "51P6hmE68NL._AC_SY200_.jpg",
        imgAlt: "Bbox Single Sealed 12 Inch image",
        price: 249.0,
        isDiscount: false,
        discount: { count: 40, isTopDeal: false },
        isTitle: false,
        title: "Bbox Single Sealed 12 Inch",
      },
      {
        id: 18,
        img: "41q9KdrsPaL._AC_SY200_.jpg",
        imgAlt: "LG 32UL950-W 32_Class Ultimate image",
        price: 249.0,
        isDiscount: false,
        discount: { count: 40, isTopDeal: false },
        isTitle: false,
        title: "LG 32UL950-W 32_Class Ultimate",
      },
      {
        id: 19,
        img: "31QT7MeYCEL._AC_SY200_.jpg",
        imgAlt: "Pioneer VSX-534 Home Audio image",
        price: 249.0,
        isDiscount: false,
        discount: { count: 40, isTopDeal: false },
        isTitle: false,
        title: "Pioneer VSX-534 Home Audio",
      },
      {
        id: 20,
        img: "31zXzf5RKRL._AC_SY200_.jpg",
        imgAlt: "APC Rack PDU, Metered, 1U image",
        price: 249.0,
        isDiscount: false,
        discount: { count: 40, isTopDeal: false },
        isTitle: false,
        title: "APC Rack PDU, Metered, 1U",
      },
    ],
  };

  const infoLinkData = {
    country: "Canada",
    title: "amazon.ca",
    url: "https://amazon.ca",
  };

  return (
    <>
      <Header />
      <Main>
        <Container className={smokeyFadeBackground}>
          <MainSlider data={sliderData} />
          <Gapper style={{ position: "relative", top: "-17rem" }}>
            <InfoLink data={infoLinkData} />
            <CategoryCard data={categoryData1} />
            <CategoryCard data={categoryData2} />
            <ProductCarousel data={productCarouselData1} />
          </Gapper>
        </Container>
      </Main>

      <Footer />
    </>
  );
}
