import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Footer from "../components/admin/footer/Footer"

function Home() {
  
  const [donationForm, setDonationForm] = useState({donationType:'', amount: ''});


  const handleInput = (event) => {
          setDonationForm({
            ...donationForm,
            [event.target.name]: event.target.value
          })
        }

   let link = '';
    if(!localStorage.getItem('auth_token'))
    {
        link = (
               
          <Link className="nav-link" to="/register" state={donationForm}>
          <button type="submit" className="btn btn-danger my-3">
            Següent pas
          </button>
        </Link>
        );
    }
    else
    {
        link = (
               
          <Link className="nav-link" to="/affiliate/profile" state={donationForm}>
          <button type="submit" className="btn btn-danger my-3">
            Següent pas
          </button>
        </Link>
        );
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
          <fieldset class="text-white d-flex justify-content-center" aria-required>    
              <div className="">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="donationType"
                    id="gridRadios1"
                    value="punctual"
                    onChange={handleInput}
                  />
          <label class="form-check-label" for="gridRadios1">Donació punctual</label>
            </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="monthly"
                  name="donationType"
                  id="gridRadios2"
                  onChange={handleInput}
                />
          <label class="form-check-label" for="gridRadios2">Donació mensual</label>
            </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="quarterly"
                  name="donationType"
                  id="gridRadios2"
                  onChange={handleInput}
              />
          <label class="form-check-label" for="gridRadios2">Donació trimestrial</label>
          </div>
          </div>
          </fieldset>
      <fieldset aria-required>
      <div>
        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-secondary bg-success" name="amount" type="button" value="5" onClick={handleInput}>5 €</button>
          <button class="btn btn-secondary bg-success" name="amount" type="button" value="10" onClick={handleInput}>10 €</button>
          <button class="btn btn-secondary bg-success" name="amount" type="button" value="15" onClick={handleInput}>15 €</button>
          <button class="btn btn-secondary bg-success" name="amount" type="button" value="25" onClick={handleInput}>25 €</button>
        </div>
      </div>
      
             
            <div className="d-grid gap-2 col-4 mx-auto">
             
                <input
                  type="number"
                  min="1"
                  name="amount"
                  className="form-control"
                  onChange={handleInput}
                />
              
              </div>
              </fieldset>
              <div class="d-flex justify-content-center">
                {link}
               
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
