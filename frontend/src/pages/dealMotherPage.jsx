import Header from "../components/header";
import Footer from "../components/footer";
import Main from "../components/main";
import Container from "../components/container";
import CategoryList from "../components/categoryList";

export default function DealMotherpage() {
  const categories = [
    {
      id: 1,
      type: "header",
      title: "Find the perfect gift\n for Mom",
      category: "for mom",
      linkActive: false,
      headerImg: "Fuji_LP_header_MD21_en_US-text-removed.png",
      headerAlt: "alt text for header image",
    },
    {
      id: 2,
      type: "card",
      title: "test main title for this item",
      category: "apparel",
      linkActive: true,
      cardImg: "51ce0zh0SoL.png",
      cardAlt: "alt text for card image",
    },
    {
      id: 3,
      type: "card",
      title: "test main title for this item",
      category: "shoes",
      linkActive: true,
      cardImg: "61cU0fj7exL.jpg",
      cardAlt: "alt text for card image",
    },
    {
      id: 4,
      type: "card",
      title: "test main title for this item",
      category: "jewelry",
      linkActive: true,
      cardImg: "41YGzuFNkYL.jpg",
      cardAlt: "alt text for card image",
    },
    {
      id: 5,
      type: "card",
      title: "test main title for this item",
      category: "watches",
      linkActive: true,
      cardImg: "51MMdH0zPfL.jpg",
      cardAlt: "alt text for card image",
    },
    {
      id: 6,
      type: "card",
      title: "test main title for this item",
      category: "skin care",
      linkActive: true,
      cardImg: "675540184.png",
      cardAlt: "alt text for card image",
    },
    {
      id: 7,
      type: "card",
      title: "test main title for this item",
      category: "makeup",
      linkActive: true,
      cardImg: "548156077.png",
      cardAlt: "alt text for card image",
    },
    {
      id: 8,
      type: "card",
      title: "test main title for this item",
      category: "handbags",
      linkActive: true,
      cardImg: "234479416.png",
      cardAlt: "alt text for card image",
    },
    {
      id: 9,
      type: "card",
      title: "test main title for this item",
      category: "beauty tools",
      linkActive: true,
      cardImg: "763666195.png",
      cardAlt: "alt text for card image",
    },
    {
      id: 10,
      type: "card",
      title: "test main title for this item",
      category: "mobile phones",
      linkActive: true,
      cardImg: "495082102.jpg",
      cardAlt: "alt text for card image",
    },
    {
      id: 11,
      type: "card",
      title: "test main title for this item",
      category: "electronics",
      linkActive: true,
      cardImg: "1040441149.png",
      cardAlt: "alt text for card image",
    },
    {
      id: 12,
      type: "card",
      title: "test main title for this item",
      category: "cases",
      linkActive: true,
      cardImg: "61Rrv-bvdhL.jpg",
      cardAlt: "alt text for card image",
    },
    {
      id: 13,
      type: "card",
      title: "test main title for this item",
      category: "smart watches",
      linkActive: true,
      cardImg: "71NWRdNUfYL_smartwatch.jpg",
      cardAlt: "alt text for card image",
    },
    {
      id: 14,
      type: "card",
      title: "test main title for this item",
      category: "kitchen",
      linkActive: true,
      cardImg: "Fuji_Passover_Mixer._CB422563791_.jpg",
      cardAlt: "alt text for card image",
    },
    {
      id: 15,
      type: "card",
      title: "test main title for this item",
      category: "home",
      linkActive: true,
      cardImg: "489420001.png",
      cardAlt: "alt text for card image",
    },
    {
      id: 16,
      type: "card",
      title: "test main title for this item",
      category: "decor",
      linkActive: true,
      cardImg: "41XVTbwV0L-2.png",
      cardAlt: "alt text for card image",
    },
    {
      id: 17,
      type: "card",
      title: "test main title for this item",
      category: "wall art",
      linkActive: true,
      cardImg: "51LX-jfe7WL.jpg",
      cardAlt: "alt text for card image",
    },
    {
      id: 18,
      type: "header",
      title: "Shop Deals for Mom",
      category: "forMom",
      linkActive: true,
      headerImg: "LP_ShopDeals_v2_en-remove-text.jpg",
      headerAlt: "alt text for header image",
    },
  ];

  return (
    <>
      <Header />
      <Main>
        <Container>
          <CategoryList categories={categories} />
        </Container>
      </Main>
      <Footer />
    </>
  );
}
