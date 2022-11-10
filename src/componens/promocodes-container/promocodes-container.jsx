import PromocodesList from "../promocodes-list/promocodes-list";
import Redirect from "../redirect/redirect";
import {useSelector} from "react-redux";
import Loader from "../loader/loader";

const PromocodesContainer = () => {
  const promododesRequest = useSelector(state => state.promocodesData.promocodesRequest);

  return (
    <>
      {promododesRequest ? (<Loader />) : (<PromocodesList/>)}
      <Redirect/>
    </>
  );
};

export default PromocodesContainer;
