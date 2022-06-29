import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>

                <div className={cx('search')}>
                    <input
                        className={cx('search__input')}
                        placeholder="Search Accounts and Videos"
                        spellCheck={false}
                    />
                    <button className={cx('clear-ico')}>
                        <FontAwesomeIcon icon={faXmarkCircle} />
                    </button>
                    <button className={cx('loading-ico')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                    <button className={cx('search-ico')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                <div className={cx('action-list')}>
                    <div className={cx('action')}>💟</div>
                    <div className={cx('action')}>🔏</div>
                </div>
            </div>
        </header>
    );
}

export default Header;
