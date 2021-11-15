import react, { useEffect, useState } from 'react'
 
import ReactDOM         from 'react-dom';
import PropTypes        from 'prop-types';
import { Component }    from 'react';
import { Container }    from 'react-bootstrap';
import {connect} from 'react-redux';
import { setPagina,setPreloader } from "../actions";

 
/* Core */
import useGetPage       from '../core/useGetPage';
import Components       from '../core/loader.js';
 
/* Componentes */
import Preloader        from '@components/preloader.js';
import Pagina  from '@components/pagina';
import HeaderComponent  from '@components/header';
 

export  const config = {
  baseURL:  process.env.REACT_APP_API_URL,
  
  //baseURL: localStorage.getItem('guec') || process.env.REACT_APP_API_URL,
  headers: {
    'kPLUSyn': localStorage.getItem('kPLUSyn') || process.env.REACT_APP_RUT, 
    Authorization: "Bearer " + (localStorage.getItem('leaezdMEQ')  || process.env.REACT_APP_TOKEN_ACCESS)  ,
    'Content-Type': 'application/json'
  }
}

//export let pageUrl = localStorage.getItem('kdiazQEQEQ')  || process.env.REACT_APP_PAGE
export let pageUrl =  process.env.REACT_APP_PAGE

if( typeof process.env.REACT_APP_DUMMY !== "undefined" )
{
  pageUrl = process.env.REACT_APP_DUMMY
}


const PaginaComponente = (props) => {
 
  const {page, getPage, error} = useGetPage();
  
  

  useEffect( () => { 
    getPage(config, pageUrl); 

  }, [])
 
  return (
    page ? 
      <Container  id="main" fluid="fluid">
      
       
          <Pagina data={page}/>
          
                        
        
      </Container>
    :
      <Preloader />
  )
}
const mapStateToProps = (state) => {
  return {
    preloader: state.preloader,
  };
};

const mapDispatchToProps = {
  setPreloader,
};


export default connect(mapStateToProps, mapDispatchToProps)(PaginaComponente);