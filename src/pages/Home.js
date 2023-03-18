import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Footer from "../components/admin/footer/Footer"

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

<div>
      <div className="bg-success ">
        <div className="bg-warning border rounded rounded-3 border-5 border-success">
          <div className="text-center">
            <h6 className="px-4 pt-5 fs-6 text-success">
            Fes-te amic de La Volta i aporta la teva donació. Gràcies al teu suport, aquest projecte pugui seguir endavant 
            </h6>
            <h6 className="px-4 pt-5 fs-6 text-success">
            Tria la quantia, afegeix les teves dades i completa el procés de donació
            </h6>
            <h6 className="px-4 pt-5 fs-6 text-success">
            Així de fàcil!
            </h6>
            </div>

        
        <form>
          <fieldset class="text-secondary d-grid gap-2 col-3 mx-auto">    
              <div className="">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="punctual"
                    id="gridRadios1"
                    value="option1"
                    onChange={handleInput}
                    checked
                  />
          <label class="form-check-label" for="gridRadios1">Donació punctual</label>
            </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="monthly"
                  id="gridRadios2"
                  onChange={handleInput}
                />
          <label class="form-check-label" for="gridRadios2">Donació mensual</label>
            </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="quarterly"
                  id="gridRadios2"
                  onChange={handleInput}
              />
          <label class="form-check-label" for="gridRadios2">Donació trimestrial</label>
          </div>
          </div>
     
      <div>
        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-secondary bg-success" type="button">5 €</button>
          <button class="btn btn-secondary bg-success" type="button">10 €</button>
          <button class="btn btn-secondary bg-success" type="button">15 €</button>
          <button class="btn btn-secondary bg-success" type="button">25 €</button>
        </div>
      </div>
      
              </fieldset>
            <div className="d-grid gap-2 col-4 mx-auto">
              <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="punctual"
                    id="gridRadios1"
                    value="option1"
                    onChange={handleInput}
                    checked
                  />
              <div className="form-group mb-3">
                <label className="text-secondary" for="password">
                  Afegeix el teu import voluntari
                </label>
                </div>
                <input
                  type="number"
                  min="1"
                  name="amount"
                  className="form-control"
                  onChange={handleInput}
                />
              </div>
              </div>
              <div class="form-group row d-grid gap-2 col-3 mx-auto">
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

      
      <Footer />

    </div>
  );
}

export default Home;
