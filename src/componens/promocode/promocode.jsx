import "./promocode.scss";
import Button from "../button/button";
import PropTypes from "prop-types";
import promocodesHelper from "../../utils/PromocodesHelper";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {promocodesRequestSuccess} from "../../services/actions/promocodes";

const Promocode = ({data}) => {
  const dispatch = useDispatch();
  const {discount, image, isReceived, name, price, link_url, id, json, promocode} = data;
  const [isPromocodeLoading, setIsPromocodeLoading] = useState(false);
  const [promocodeCopyStatus, setPromocodeCopyStatus] = useState('primary');
  const [promocodeButtonText, setPromocodeButtonText] = useState('Скопировать');

  const handleClickInfo = () => window.location.assign(link_url);

  const handleSavePromocodes = (promocodes) => {
    setIsPromocodeLoading(false);
    dispatch(promocodesRequestSuccess(promocodes))
  }

  const handleReceivePromocode = () => {
    setIsPromocodeLoading(true);
    promocodesHelper.receivePromocode(json, handleSavePromocodes);
  }

  const setPromoStatus = (status, text) => {
    setPromocodeCopyStatus(status);
    setPromocodeButtonText(text);

    setTimeout(() => {
      setPromocodeCopyStatus('primary');
      setPromocodeButtonText('Скопировать');
    }, 3000)
  }

  const handleCopyPromocode = () => {
    setPromoStatus('success', 'Cкопирован');
    navigator.clipboard.writeText(promocode);
    /* eslint-disable-next-line */
    TechnoAndroid.copyToClipboard(promocode);
  }

  return (
    <div className="promocode">
      <span className="promocode__discount">-{discount}%</span>
      <img
        className="promocode__image"
        src={image}
        alt={name}
      />
      <h3 className="promocode__title">{name}</h3>
      <span className="promocode__price-title">Цена по промокоду:</span>
      <div className="promocode__prices">
        <span className="promocode__discount-price">
          {Number(price / 100 * (100 - discount)).toLocaleString()} ₸</span>
        <span className="promocode__price">{price}</span>
      </div>
      <div className="promocode__container">
        <div className="promocode__wrapper">
          <span className="promocode__icon"/>
          <p className="promocode__values">
            <span className="promocode__text">Промокод:</span>
            <span className="promocode__value">{promocode ? promocode : '-'}</span>
          </p>
        </div>
        <button
          onClick={handleCopyPromocode}
          className={`promocode__copy promocode__copy_${promocodeCopyStatus}`}
        >
          {promocodeButtonText}
        </button>
        <button
          onClick={handleCopyPromocode}
          className={`
              promocode__copy 
              promocode__copy_mobile 
               promocode__copy_${promocodeCopyStatus}
              promocode__copy_mobile-${promocodeCopyStatus}
              `}
        />
      </div>
      <Button
        type="secondary-outline"
        isPromocode
        onClick={handleClickInfo}
      >
        Подробнее о товаре
      </Button>
    </div>
  );
};

Promocode.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Promocode;
