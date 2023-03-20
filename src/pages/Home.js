import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Footer from "../components/admin/footer/Footer"
import Swal from "sweetalert2";

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
          <button type="submit" className="btn btn-danger my-3" onSubmit={validationForm}>
            Següent pas
          </button>
        </Link>
        );
    }
    else
    {
        link = (
               
          <Link className="nav-link" to="/affiliate/profile" state={donationForm}>
          <button type="submit" className="btn btn-danger my-3" onSubmit={validationForm} >
            Següent pas
          </button>
        </Link>
        );
    }    
    
    
    function validationForm(event) {
      event.preventDefault();
      //let usuario = document.getElementById('usuario').value;
      if(donationForm.donationType === ''){
        Swal.fire("Tria el tipus de donació.")
        return false
      }
      else if(donationForm.amount === ''){
        Swal.fire("Tria la quantitat de la teva aportació")
        return false
      }
      return true
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

        
        <form id="form"> 
          <fieldset className="text-white d-flex justify-content-center" required>    
              <div className="">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="donationType"
                    id="gridRadios1"
                    value=" puntual "
                    onChange={handleInput}
                  />
          <label class="form-check-label" for="gridRadios1">Donació punctual</label>
            </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value=" mensual "
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
                  value=" trimestral "
                  name="donationType"
                  id="gridRadios2"
                  onChange={handleInput}
              />
          <label class="form-check-label" for="gridRadios2">Donació trimestrial</label>
          </div>
          </div>
          </fieldset>
      <fieldset required>
      <div>
        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-success" name="amount" type="button" value="5" onClick={handleInput}>5 €</button>
          <button class="btn btn-success" name="amount" type="button" value="10" onClick={handleInput}>10 €</button>
          <button class="btn btn-success" name="amount" type="button" value="15" onClick={handleInput}>15 €</button>
          <button class="btn btn-success" name="amount" type="button" value="25" onClick={handleInput}>25 €</button>
        </div>
      </div>
      
     
            <div className="d-grid gap-2 col-4 mx-auto">
            <h6 className="px-4 pt-4 text-success text-center">
            Afegeix el teu import voluntari 
            </h6>
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
