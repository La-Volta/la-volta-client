import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";

function Home() {
  const [donationForm, setDonationForm] = useState({type:'', amount:''});

   const handleInput = (event) => {
          setDonationForm({
            ...donationForm,
            [event.target.name]: event.target.value
          })
        }
  

  return (
    <div>
      <Navbar />
      <div className="bg-success ">
        <div className="bg-warning border rounded rounded-3 border-5 border-success">
          <div className="text-center">
            <h6 className="px-4 pt-5 fs-6 text-success">
              Per a fer efectiva la donació és necessari registrar-se i seguir
              els passos indicats
            </h6>
            <h6 className="px-4 pt-5 fs-6 text-success">
              Per a fer efectiva la donació és necessari registrar-se i seguir
              els passos indicats
            </h6>

            <form className="px-5">
              <fieldset class="form-group text-secondary">
                <div></div>
                <div class="row ">
                  <div class="col-sm-10 ">
                    <div class="form-check ">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="punctual"
                        id="gridRadios1"
                        value="option1"
                        onChange={handleInput}
                        checked
                      />
                      <label class="form-check-label" for="gridRadios1">
                        Donació punctual
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="monthly"
                        id="gridRadios2"
                     
                        onChange={handleInput}
                      />
                      <label class="form-check-label" for="gridRadios2">
                        Donació mensual
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="quarterly"
                        id="gridRadios2"
                        
                        onChange={handleInput}
                      />
                      <label class="form-check-label" for="gridRadios2">
                        Donació trimestrial
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
              <div className="form-group mb-3">
                <label className="text-secondary" for="password">
                  Afegeix el teu import voluntari
                </label>
                <input
                  type="number"
                  min="1"
                  name="amount"
                  className="form-control"
                  onChange={handleInput}
                />
              </div>
              <div class="form-group row">
                <div class="col-sm-10">
                  <Link className="nav-link" to="/register">
                    <button type="submit" className="btn btn-danger ">
                      Següent pas
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
