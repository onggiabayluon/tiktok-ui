import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { useDebounce } from '~/hooks';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isVisible, setIsVisible] = useState(true);
    const [loading, setLoading] = useState(false);

    // Delay 0,5 second whenever searching
    const debounceValue = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        // Mounted =>
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }

        // When wating for response => Show Loading
        setLoading(true);

        // Fetch data
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounceValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => setSearchResult(res.data))
            .finally(() => {
                // When response finished => Remove loading
                setLoading(false);
            });
    }, [debounceValue]);

    const handleClose = () => {
        setSearchValue('');
        setSearchResult([]);
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
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
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

                {!!loading && (
                    <button className={cx('loading-ico')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                )}

                <button className={cx('search-ico')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
