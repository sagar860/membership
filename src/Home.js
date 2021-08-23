import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import "./Home.css"

export default function Home() {
  

  return (
    <>
      <div className="row">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Yearly membership</h5>
              <p className="card-text">$105 billed every year</p>
              <Link to="/signup">
              <button className="btn">Subscribe now</button>
              </Link>

            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Yearly membership</h5>
              <p className="card-text">$105 billed every year</p>
              <Link to="/signup">
              <button className="btn">Subscribe now</button>
              </Link>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}