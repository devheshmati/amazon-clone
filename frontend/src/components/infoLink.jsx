import { Outlet, Link } from "react-router-dom";
import '../styles/infoLink.scss';

export default function InfoLink({ data }) {
  return (
    <div className="infoLink">
      <p>
        {`You are on amazon.com. You can also shop on Amazon ${data.country} for millions
        of products with fast local delivery.`}
      </p>
      <Link to={data.url}>Click here to go to {data.title}</Link>
      <Outlet />
    </div>
  );
}
