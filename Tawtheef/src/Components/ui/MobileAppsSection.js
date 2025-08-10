import React from "react";
import { Link } from "react-router-dom";
import apps from "../../assets/app_primary.png"

const MobileAppsSection = () => {
  return (
    <div className="row">
      <div className="col-md-6 align-self-center text-center text-md-left mb-5 mb-md-0">
        <h2 className="text-white">Get The Mobile Apps</h2>
        <p className="mb-5 lead text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit tempora adipisci
          impedit.
        </p>
        <p className="mb-0">
          <Link href="#" className="btn btn-dark btn-md px-4 border-width-2 me-3">
            <span className="icon-apple me-3"></span>App Store
          </Link>
          <Link href="#" className="btn btn-dark btn-md px-4 border-width-2">
            <span className="icon-android me-3"></span>Play Store
          </Link>
        </p>
      </div>
      <div className="col-md-6 ms-auto align-self-end">
        <img src={apps}
          alt="Mobile Apps"
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default MobileAppsSection;
