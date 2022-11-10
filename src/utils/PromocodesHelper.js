import {promocodes} from "./promocodes";

class PromocodesCore {
  _checkPromocodeValidity(promocodeDate) {
    //! в условии должно быть >=
    return (new Date(Date.parse(promocodeDate)).getTime() + 86400000) >= Date.now()
  }
}

class PromocodesHelper extends PromocodesCore {
  constructor(globalPromocodes) {
    super();
    this._globalPromocodes = globalPromocodes;
    this._promocodes = {};
    this._ids = [];
    this._receivedPromocodes = [];
    this._commonPromocodes = [];
  }

  receivePromocode(json, setPromocodesData) {
    const data = JSON.parse(json);
    const {id, till} = data;
    console.log(this._promocodes)
    /* eslint-disable-next-line */
    r46("get_promo_code", {id}, promocode => {

      let i = (isNaN(Number(Object.keys(this._promocodes).at(-1)))) ? 1 : (Number(Object.keys(this._promocodes).at(-1)) + 1);

      this._promocodes[i] = {
        "id": `${id}`,
        "promocode": promocode,
        "till": till
      };

      console.log(this._promocodes)

      const receivedPromocode = this._commonPromocodes.find(promocode => promocode.id === data.id);
      const updatedReceivedPromocode = {
        ...receivedPromocode,
        isReceived: true,
        promocode,
      }
      this._commonPromocodes = this._commonPromocodes.filter(promocode => promocode.id !== data.id);
      this._receivedPromocodes.push(updatedReceivedPromocode);

      const preparedPromocodes = [...this._receivedPromocodes, ...this._commonPromocodes];
      const sortedPromocodes = preparedPromocodes.sort((a, b) => b.discount - a.discount);

      setPromocodesData(sortedPromocodes);

      /* eslint-disable-next-line */
      r46("profile", "set", {"promocode_list": this._promocodes})
    })
  }

  getPromocodesData(setPromocodesData) {
    /**
     * Получаем данные профиля клиента
     */
    /* eslint-disable-next-line */
    r46('profile', 'get', profile => {
      /**
       * Проверяем наличие полученных купонов
       */
      if (profile.custom_properties.promocode_list) {
        this._promocodes = profile.custom_properties.promocode_list;
        console.log(profile.custom_properties)

        if (this._promocodes) {

          for (let key in this._promocodes) {
            /**
             * Собираем ID в отдельный массив
             */
            if (isNaN(Number(this._promocodes[key].id)) === false) {
              this._ids.push(Number(this._promocodes[key].id));
            }

            const promoId = this._promocodes[key].id;
            const promoIdNum = Number(this._promocodes[key].id);
            const promocode = this._promocodes[key].promocode;
            const till = this._promocodes[key].till;

            /**
             * Забираем статичные данные из общего массива
             */
            for (const [key, value] of Object.entries(this._globalPromocodes)) {
              if ((value.id === promoIdNum) || (value.id === promoId)) {
                const promocodeTill = till ? till : value.till;
                const day = new Date(Date.parse(promocodeTill)).getDate();
                const month = new Date(Date.parse(promocodeTill)).getMonth();

                /**
                 * Проверяем актуальность купона
                 */
                if (this._checkPromocodeValidity(promocodeTill)) {
                  this._receivedPromocodes.push({
                    isReceived: true,
                    promocode,
                    day,
                    month,
                    ...value,
                  })
                }
              }

            }
          }
        }
      }

      /**
       * Проверяем глобальный объект с купонами
       */
      if (this._globalPromocodes) {
        const promoDataIds = [];
        for (let i = 0; i < this._globalPromocodes.length; i++) {
          promoDataIds.push(this._globalPromocodes[i].id)
        }
        if (promoDataIds.length > 0) {
          let data = new FormData();
          data.append("promocodes", promoDataIds);
          fetch('https://new.technodom.kg/promocodes/', {
            method: 'POST',
            body: data
          }).then(response => {
            return response.json();
          }).then(data => {
            const {active} = data;

            for (let key in this._globalPromocodes) {
              /**
               * Исключаем полученные купоны
               */
              if ((this._ids.indexOf(this._globalPromocodes[key].id) === -1) && (active.indexOf(this._globalPromocodes[key].id) !== -1)) {
                const day = new Date(Date.parse(this._globalPromocodes[key].till)).getDate();
                const month = new Date(Date.parse(this._globalPromocodes[key].till)).getMonth();

                /**
                 * Проверяем актуальность
                 */
                if (this._checkPromocodeValidity(this._globalPromocodes[key].till)) {
                  this._commonPromocodes.push({
                    isReceived: false,
                    day,
                    month,
                    ...this._globalPromocodes[key],
                    json: JSON.stringify(this._globalPromocodes[key]),
                  })
                }
              }
            }
            const preparedPromocodes = [...this._receivedPromocodes, ...this._commonPromocodes];
            const sortedPromocodes = preparedPromocodes.sort((a, b) => b.discount - a.discount);

            setPromocodesData(sortedPromocodes);
          })
        }
      }
    })
  }
}

const promocodesHelper = new PromocodesHelper(promocodes);
export default promocodesHelper;
