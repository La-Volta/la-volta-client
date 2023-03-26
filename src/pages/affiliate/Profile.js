import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/admin/footer/Footer";
import { useLocation, Link} from "react-router-dom";

function Profile() {
  const  {state}  = useLocation();
  console.log(state);

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
      <p className="text-success text-center"> Pots canviar la teva aportació 
      <span> <Link className="text-success" to="/" >
      aquí.
    </Link>
    </span></p>
    </>
    );
  } 

  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <main>
          <div className="m-5 text-success text-center">
          <h3>Benvingudes!</h3>
          <h6>Aquest és el teu perfil amic de La Volta</h6> 
          </div>
          <div class="bg-success text-center">
          <h6>Ajuda al fet que la Volta 
            faci realitat els seus projectes 
            culturals gràcies a 
            una donació</h6>
          </div>


        
        <div>{divDonation}</div>
        <div className="text-success"></div>


      </main>
      <Footer />
    </div>
  );
}

export default Profile;
