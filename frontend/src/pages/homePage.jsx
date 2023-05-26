import Header from "../components/header";
import Footer from "../components/footer";
import Main from "../components/main";
import Container from "../components/container";
import MainSlider from "../components/mainSlider";
import InfoLink from "../components/infoLink";
import Gapper from "../components/gapper";
import CategoryCard from "../components/categoryCard";

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
      imgAlt: 'This is alt for image',
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

  const infoLinkData = {
    country: "Canada",
    title: "amazon.ca",
    url: "https://amazon.ca",
  };

  return (
    <>
      <Header />
      <Main>
        <Container>
          <MainSlider data={sliderData} />
          <Gapper style={{ position: "relative", top: "-17rem" }}>
            <InfoLink data={infoLinkData} />
            <CategoryCard data={categoryData1} />
          </Gapper>
        </Container>
      </Main>

      <Footer />
    </>
  );
}
