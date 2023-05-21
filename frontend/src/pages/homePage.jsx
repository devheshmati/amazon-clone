import Header from "../components/header";
import Footer from "../components/footer";
import Main from "../components/main";
import Container from "../components/container";
import MainSlider from "../components/mainSlider";

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

  return (
    <>
      <Header />
      <Main>
        <Container>
          <MainSlider data={sliderData} />
          <div>
            <h3>hello</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              minima laboriosam perferendis quam provident aperiam, voluptatum,
              nobis optio illo velit asperiores mollitia neque magni sunt? Omnis
              saepe nisi corporis fuga.
            </p>
          </div>
        </Container>
      </Main>

      <Footer />
    </>
  );
}
