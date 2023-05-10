import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-5">
      <div className="text-center w-1/2 mx-auto space-y-3">
        <h3 className="text-2xl font-bold text-orange-500"> Services</h3>
        <h3 className="text-5xl">Our Service Area</h3>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which donot look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
