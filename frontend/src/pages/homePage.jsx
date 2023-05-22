import Header from "../components/header";
import Footer from "../components/footer";
import Main from "../components/main";
import Container from "../components/container";
import MainSlider from "../components/mainSlider";
import InfoLink from "../components/infoLink";
import Gapper from "../components/gapper";

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
          <Gapper>
            <InfoLink data={infoLinkData} />
          </Gapper>
        </Container>
      </Main>

      <Footer />
    </>
  );
}
