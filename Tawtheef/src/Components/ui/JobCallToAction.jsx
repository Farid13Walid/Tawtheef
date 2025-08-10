import { Link } from "react-router-dom";

function JobCallToAction() {
  return (
    <div className="row align-items-center">
      <div className="col-md-8">
        <h2 className="text-white">Looking For A Job?</h2>
        <p className="mb-0 text-white lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit tempora
          adipisci impedit.
        </p>
      </div>
      <div className="col-md-3 ml-auto">
        <Link to="Register" className="btn btn-light border border-1 btn-block w-75 rounded-1 btn-lg">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default JobCallToAction;
