import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/admin/footer/Footer";
import { useLocation, Link} from "react-router-dom";
import CallUser from "../../services/CallUser";
import ShowAffiliate from "../../components/ShowAffiliate";

function Profile() {
  //const navigate = useNavigate();
  const  {state}  = useLocation();
  console.log(state);

  /* let donationId = ''
  if(state.state.amount === "5" && state.state.donationType === "puntual") {donationId = 1};
  if(state.state.amount === "5" && state.state.donationType === "mensual") {donationId = 2};
  if(state.state.amount === "5" && state.state.donationType === "anual") {donationId = 3}; 

  console.log(donationId) */

  // const stripeSubmit = async (id) => {
    
  //   await CallUser().checkout(id).then((res) => {
  //   if (res.data.status === 200) {
  //     //window.location.replace(res.data.url);
  //     //navigate(res.data.url);
  //     console.log(res.data.url)
  //   }
  // });
    
  // };


  
   async function stripeSubmit(id){
    await CallUser().checkout(id).then((res) => {
        if (res.data.status === 200) {
          //console.log('sucess')
          //window.location.replace(res.data.url);
          //navigate(res.data.url);
          console.log(res.data.status)
        }
      });
    
    }
    
  

 

  let divDonation = "";

  if (state.state === null ||{state} === null) {
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
      <ShowAffiliate />
          <div className="m-5 text-success text-center">
          <h3>Hola {userName}!</h3>
          <h6>Aquest és el teu perfil amic de La Volta</h6> 
          </div>
          <div className="bg-success text-center">
          <h6>Ajuda al fet que la Volta 
            faci realitat els seus projectes 
            culturals gràcies a 
            una donació</h6>
          </div>


        
        <div>{divDonation}</div>
        <button  onClick={() => stripeSubmit()} className="btn btn-danger">Paga</button>
        <div className="text-success"></div>

        <Link to={`/affiliate/edit/${userId}`} className='btn btn-danger mx-2 mb-1'>show profile affiliate</Link>
     
      </main>
      <Footer />
    </div>
  );
}

export default Profile;
