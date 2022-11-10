import "./promocodes-list.scss";
import {useSelector} from "react-redux";
import Promocode from "../promocode/promocode";
import cn from "classnames";
import EmptyPromocodes from "../empty-promocodes/empty-promocodes";

const PromocodesList = () => {
  const promocodes = useSelector(state => state.promocodesData.promocodes);
  const viewport = useSelector(state => state.containerQuery.viewport);

  return (
    <div className={`promocodes-list promocodes-list_${cn(viewport)}`}>
      {
        promocodes.length > 0 ? (
          <div className={`promocodes-list__container promocodes-list__container_${cn(viewport)}`}>
            {promocodes.map(promocode => (<Promocode data={promocode} key={promocode.id}/>))}
          </div>
        ) : (<EmptyPromocodes />)
      }
    </div>
  );
};

export default PromocodesList;
