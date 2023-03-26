import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Footer from "../components/admin/footer/Footer"
import Swal from "sweetalert2";

function Home() {

  const navigate = useNavigate();
  
  const [donationForm, setDonationForm] = useState({donationType:'', amount: ''});
  
  console.log(donationForm)

  const handleInput = (event) => {
          setDonationForm({
            ...donationForm,
            [event.target.name]: event.target.value
          })

          
        }

    
        function validationForm(event) {
          event.preventDefault();
          if(donationForm.donationType !== '' && donationForm.amount !== ''){
            if(!localStorage.getItem('auth_token')) {
              navigate('/register', {state: donationForm});
            } else {
              navigate('/affiliate/profile', {state: {state : donationForm}});
            }
            
          }
          if(donationForm.donationType === ''){
            Swal.fire({
              title: "Tria el tipus de donació",
              color: 'white',
              background: '#87EA00',
              confirmButtonColor: '#8506A9',})          
          }
          if(donationForm.amount === ''){
            Swal.fire({
              title: "Tria la quantitat de la teva aportació",
              color: 'white',
              background: '#87EA00',
              confirmButtonColor: '#8506A9',
            })
          }
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

        
        <form id="form" onSubmit={validationForm}> 
          <fieldset className="text-white d-flex justify-content-center" required>    
              <div className="m-4">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="donationType"
                    id="gridRadios1"
                    value="puntual"
                    onChange={handleInput}
                  />
          <label class="form-check-label" for="gridRadios1">Donació puntual</label>
            </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="mensual"
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
                  value="anual"
                  name="donationType"
                  id="gridRadios2"
                  onChange={handleInput}
              />
          <label class="form-check-label" for="gridRadios2">Donació anual</label>
          </div>
          </div>
          </fieldset>
      <fieldset required>
      <div>
        <div class="d-grid gap-3 col-6 mx-auto">
          <button class="btn btn-success" name="amount" type="button" value="5" onClick={handleInput}>5 €</button>
          <button class="btn btn-success" name="amount" type="button" value="10" onClick={handleInput}>10 €</button>
          <button class="btn btn-success" name="amount" type="button" value="15" onClick={handleInput}>15 €</button>
          <button class="btn btn-success" name="amount" type="button" value="25" onClick={handleInput}>25 €</button>
        </div>
      </div>
      
     
            <div className="d-grid gap-4 col-7 mx-auto">
            <h6 className="col-12 px-4 pt-4 text-success text-center">
            Afegeix el teu import voluntari 
            </h6>
              
              
              </div>
              </fieldset>
              <div class="d-flex justify-content-center">
              <button type="submit" className="btn btn-danger my-3" >
                Següent pas
              </button>
               
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
