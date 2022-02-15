/* Aqui deberian ir todas las paginas del proyecto eredar la informacion desde aqui
 */
import React, {useEffect } from "react";
import HomeSeguros from "./home/index";
import DetailsInsurance from "./detailsinsurance/index";

import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../../actions";

import Preloader from '../../components/preloader';

const Seguros = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page)

  let pageUrl = 'HOME';

  useEffect(() => {
    setTimeout(() => {
      dispatch(setPage(pageUrl))
    }, 2000);
  }, [])

  return (
    <div>
      {page === "PRELOADER" ? <Preloader /> : <div></div>}
      {page === "HOME" ? <HomeSeguros /> : <div></div>}
      {page === "DETAILS_INSURANCE" ? <DetailsInsurance /> : <div></div>}
    </div>
  )
}

export default Seguros
