import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <div className="flex items-center justify-center text-xl text-orange-500">
          <p>Price: {price}</p>
          <Link to={`/services/${_id}`}>
            <button>
              {" "}
              <FaArrowRight></FaArrowRight>{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
