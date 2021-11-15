import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { setPagina,setPreloader } from "../actions";
import Components from "../core/loader";
import Preloader from "@components/preloader.js";
import ModalCancelacionRemota from "../components/ContratacionRemota/eliminacion"
import propTypes from "prop-types";

const Pagina = (props) => {
  //props.setPagina({pag})
  const { data, pagina,preloader,setPreloader } = props;

  const isPagina = () => {
    // const result =  data.map((data,i) => {return(<div key={i}>{Components(data)}</div>)});
    
  
  setPreloader('INACTIVE')
    data.map((data) => {
    
      props.setPagina({ data });
    });
  };

  useEffect(() => {
    isPagina();

  }, []);
  

  return (
 
    <div>
               <ModalCancelacionRemota data ={""}/>
        
      {
       preloader === 'ACTIVE' ?  <Preloader/> :""  
      }

    <div id="pagina">  { 
      pagina.map((data, i) => {
        return (
        
        <div key={i}>{Components(data.data)}</div>) 
      })}
       </div>
    
  </div>
  )
};
const mapStateToProps = (state) => {
  return {
    pagina: state.pagina,
    preloader: state.preloader
  };
};

const mapDispatchToProps = {
  setPagina,
  setPreloader
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagina);
