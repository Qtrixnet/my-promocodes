import './header.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';

const Header = () => {
    const viewport = useSelector(state => state.containerQuery.viewport);

    return (
        <div className={`header header_${cn(viewport)}`}>
            <h2 className={`header__title header__title_${cn(viewport)}`}>Коллекция промокодов</h2>
            <p className="header__text">Получайте промокоды, используйте их для покупок и экономьте. Каждый промокод -
                возможность получить скидку и сделать покупку еще приятнее.</p>
        </div>
    );
};

export default Header;
