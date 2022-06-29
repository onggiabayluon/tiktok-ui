import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setsearchResult] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setsearchResult([1, 1, 1]);
        }, 300);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>

                <HeadlessTippy
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                    visible={searchResult.length > 0}
                >
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
                </HeadlessTippy>

                <div className={cx('action-list')}>
                    <div className={cx('action')}>💟</div>
                    <div className={cx('action')}>🔏</div>
                </div>
            </div>
        </header>
    );
}

export default Header;
