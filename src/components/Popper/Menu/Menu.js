import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
import { useState } from 'react';
import Header from './Header';

const cx = classNames.bind(styles);
const defaultFnc = () => {};

function Menu({ children, items = [], onChange = defaultFnc }) {
    const [history, setHistory] = useState([{ data: items }]);

    const lastMenuItem = history[history.length - 1];

    const renderItems = () => {
        return lastMenuItem.data.map((item, index) => {
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        const hasChilren = !!item.children;

                        // Nếu có children thì đẩy phần tử con vào array
                        if (hasChilren) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            // không có thì xử lý item hiện tại
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title={lastMenuItem.title}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, history.length - 1));
                                }}
                            ></Header>
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
