import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Search from '~/components/Layout/components/Search';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>

                {/* Search */}
                <Search />

                <div className={cx('action-list')}>
                    <div className={cx('action')}>💟</div>
                    <div className={cx('action')}>🔏</div>
                </div>
            </div>
        </header>
    );
}

export default Header;
