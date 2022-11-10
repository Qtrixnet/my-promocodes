import "./redirect.scss";
import RedirectBanner from "../redirect-banner/redirect-banner";
import {useSelector} from "react-redux";
import cn from "classnames";

const Redirect = () => {
  const viewport = useSelector(state => state.containerQuery.viewport);

  return (
    <div className={`redirect redirect_${cn(viewport)}`}>
      <h2 className={`redirect__title redirect__title_${cn(viewport)}`}>Забирайте промокоды тут!</h2>
      <p className={`redirect__text redirect__text_${cn(viewport)}`}>Получайте промокоды, используйте их для покупок и экономьте.</p>
      <RedirectBanner />
    </div>
  );
};

export default Redirect;
