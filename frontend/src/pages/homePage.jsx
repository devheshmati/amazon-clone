import Header from '../components/header';
import Footer from '../components/footer';
import Main from '../components/main';

export default function HomePage() {
  return (
    <div className="container">
      <Header />
      <Main>
        <h2>This is home page and i use the main component for show this elements</h2>
      </Main>
      <Footer />
    </div>
  )
}
