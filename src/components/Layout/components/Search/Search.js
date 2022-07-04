import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setsearchResult] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [isVisible, setIsVisible] = useState(true);

    const inputRef = useRef();

    useEffect(() => {
        // When wating for response => Show Loading
        // When response finished => Remove loading
        setTimeout(() => {
            setsearchResult([1, 1, 1]);
        }, 300);
    }, []);

    const handleClose = () => {
        setSearchValue('');
        setsearchResult([]);
        inputRef.current.focus();
    };

    const handleOnClickOutside = () => {
        setIsVisible(false);
    };

    return (
        <HeadlessTippy
            interactive
            visible={isVisible && searchResult.length > 0}
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
            onClickOutside={handleOnClickOutside}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    className={cx('search__input')}
                    placeholder="Search Accounts and Videos"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setIsVisible(true)}
                />
                {!!searchValue && (
                    <button className={cx('clear-ico')} onClick={handleClose}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* <button className={cx('loading-ico')}>
                    <FontAwesomeIcon icon={faSpinner} />
                </button> */}

                <button className={cx('search-ico')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
