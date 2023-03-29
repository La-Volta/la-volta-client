import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/admin/footer/Footer";
import { useLocation, Link} from "react-router-dom";
import CallUser from "../../services/CallUser";


function Profile() {
  
  const  {state}  = useLocation();
  console.log(state);

  let donationId = ''
  if(state.state !== null){ 
  if(state.state.amount === "5" && state.state.donationType === "puntual") {donationId = 1};
  if(state.state.amount === "5" && state.state.donationType === "mensual") {donationId = 2};
  if(state.state.amount === "5" && state.state.donationType === "anual") {donationId = 3}; 
  if(state.state.amount === "10" && state.state.donationType === "puntual") {donationId = 4};
  if(state.state.amount === "10" && state.state.donationType === "mensual") {donationId = 5};
  if(state.state.amount === "10" && state.state.donationType === "anual") {donationId = 6}; 
  if(state.state.amount === "15" && state.state.donationType === "puntual") {donationId = 7};
  if(state.state.amount === "15" && state.state.donationType === "mensual") {donationId = 8};
  if(state.state.amount === "15" && state.state.donationType === "anual") {donationId = 9}; 
  if(state.state.amount === "25" && state.state.donationType === "puntual") {donationId = 10};
  if(state.state.amount === "25" && state.state.donationType === "mensual") {donationId = 11};
  if(state.state.amount === "25" && state.state.donationType === "anual") {donationId = 12}; 
}

  console.log(donationId) 

  


  
   async function stripeSubmit(id){
    await CallUser().checkout(id).then((res) => {
      console.log(res.data.url)
      window.location.replace(res.data.url);
       
      }).catch((error) => {
        console.log(error)
      });
    
    }
    
  

 

  let divDonation = "";

  if (state.state === null) {
    divDonation = (
      <>
      <p className="m-3 text-success d-flex justify-content-center">
        Vols fer una nova donació?
      <span> <Link className="m-3 text-success" to="/" >
       aquí.
     </Link>
     </span>
     </p>
     </>
    );
  } else if (state.state) {
    divDonation = (
      <>
      <p className="text-success d-flex justify-content-center">
        Tens un import {state.state.donationType} pendent de
        pagament de {state.state.amount}€.
      </p>
      <p className="text-success text-center"> 
        Pots canviar la teva aportació <span> <Link className="text-success" to="/" >aquí.</Link></span>
      </p>

    </>
    );
  } 
  const userName = window.localStorage.getItem('auth_name');
  const userId = window.localStorage.getItem('auth_Id');

  return (
    <div className="sb-nav-fixed">
      <Navbar />

      <main>
      
          <div className="m-5 text-success text-center">
          <h3>Hola {userName}!</h3>
          <h6>Aquest és el teu perfil amic de La Volta</h6> 
          </div>
          <div className="bg-success text-center">
          <h6>Ajuda a que La Volta 
            faci realitat els seus projectes 
            culturals gràcies a 
            una donació</h6>
          </div>


        
        <div>{divDonation}</div>
       
          <button  onClick={() => stripeSubmit(donationId)} className="btn btn-danger m-5 text-whit d-flex justify-content-center mx-auto">Continuar amb el pagament</button>
       
        <div className="text-success"></div>

        <Link to={`/affiliate/edit/${userId}`} state={state} className='btn btn-danger mx-2 mb-1'>Mostra el perfil de amic</Link>
     
      </main>
      <Footer />
    </div>
  );
}

export default Profile;
