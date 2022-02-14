import axios from "axios";

const usePostData = () => { 

  const base = process.env.REACT_APP_API_URL

  async function postDataHome(id) {
    //Setea codigo de seguro seleccionado

    var data = JSON.stringify({
      codigoSeguro: id,
      plataforma: "SitioPrivado",
    });

    var config = {
      method: "post",
      url: `${base}/itau/insertData`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    //Retorna data o error
    return axios(config)
      .then(function (response) {
     
        return response;
      })
      .catch(function (error) {
        console.log( "error postDataHome...", error );
        return error;
      });
  }

  

  return { postDataHome };
};
export default usePostData;
