/* Aqui deberian ir todas las paginas del proyecto eredar la informacion desde aqui
 */
import React, {useEffect } from "react";
import HomeVidaClasico from "./home/index";

import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../../actions";

import Preloader from '../../components/preloader';

const VidaClasico = () => {
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
      {page === "HOME" ? <HomeVidaClasico /> : <div></div>}
    </div>
  )
}

export default VidaClasico
