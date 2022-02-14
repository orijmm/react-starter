import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../../actions";
import usePostData from "../custom/usePostData";
import { Button } from "react-bootstrap";


const ButtonNext = ({
  data,
  styleValue = false,
  activeNext = true,
  title,
}) => {
  const page = useSelector((state) => state.page);

  const buttonStyle = {
    active: !styleValue ? "btn-white" : "btn-primary",
    hober: "btn-white",
    disabled: "button_footer_next",
  };


  const dispatch = useDispatch();
  const { postDataHome } = usePostData();

  const handleChange = () => {
    switch (page) {
      case "HOME":

        let respData = postDataHome(data);

        respData.then((val) => {
          //Si no trae error
          if (val.data.error == false) {
            dispatch(setPage("PRELOADER"));
            setTimeout(() => {
              dispatch(setPage("DATOS"));
            }, 3000);
          } else {
            dispatch(setPage("PRELOADER"));
            setTimeout(() => {
              dispatch(setPage("ERROR_PAGE"));
            }, 3000);
          }
        });

        break;
    }
  };
  return (
    <Button
      className={
        activeNext === true ? buttonStyle.disabled : buttonStyle.active
      }
      disabled={activeNext}
      onClick={() => handleChange()}
    >
      {title}
    </Button>
  );
};

export default ButtonNext;
