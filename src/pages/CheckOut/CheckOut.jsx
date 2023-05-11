import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id } = service;
  return (
    <div>
      <h2>
        Book Service: {title} : {_id}
      </h2>
      <div className="card-body">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control">
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Your Phone Number"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Your Email"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary"
              type="submit"
              value="Confirm Order"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
