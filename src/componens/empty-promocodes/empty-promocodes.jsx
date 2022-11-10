import "./empty-promocodes.scss";
import emptyPromocodes from "../../animations/empty-promocodes.json";
import Lottie from "lottie-react";
import {useSelector} from "react-redux";
import cn from "classnames";

const EmptyPromocodes = () => {
  const viewport = useSelector(state => state.containerQuery.viewport);

  return (
    <div className={`empty-promocodes empty-promocodes_${cn(viewport)}`}>
      <Lottie
        className={`empty-promocodes__animation empty-promocodes__animation_${cn(viewport)}`}
        animationData={emptyPromocodes}
        loop={true}
      />
      <p className={`empty-promocodes__text empty-promocodes__text_${cn(viewport)}`}>
        К сожалению, у вас пока нет ни одного...
      </p>
    </div>
  );
};

export default EmptyPromocodes;
