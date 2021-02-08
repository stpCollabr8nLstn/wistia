import ClassNames from '../../utils/classnames';
import COLORS from '../../utils/colors';

const List = ({ children }) => {
    return (
        <ul className="List">
            {children}
            <style jsx>{`
                .List {
                    margin: 24px auto;
                    max-width: 45%;
                    border: 1px solid ${COLORS.GRAY_1};
                }
                @media (max-width: 768px) {
                    .List {
                        max-width: 85%;
                    }
                }
            `}</style>
        </ul>
    )
}

const ListItem = ({ children, onClick, isSelected }) => {
    return (
        <li className={`${isSelected ? "List__item List__item--selected" : "List__item"}`} onClick={onClick}>
            {children}
            <style jsx>{`
                .List__item {
                    overflow: hidden;
                    min-height: 62px;
                }
                .List__item:not(last-child) {
                    border-bottom: 1px solid ${COLORS.GRAY_1};
                }
                .List__item--selected {
                    background-color: ${COLORS.GRAY_1};
                }
            `}</style>
        </li>
    )
}

const ListHeading = ({ children, isSelected }) => {
    return (
        <div className={`${isSelected ? "List__heading List__heading--selected" : "List__heading"}`}>
            {children}
            <style jsx>{`
                .List__heading {
                    padding: 16px 24px;
                    display: flex;
                    align-items: center;
                    background-color: #fff;
                    position: relative;
                    z-index: 1;
                    height: 100%;
                }
                .List__heading--selected {
                    background-color: ${COLORS.GRAY_1};
                }
            `}</style>
        </div>
    )
}

const ListIcon = ({ children, color }) => {
    return (
        <div className="List__icon">
            {children}
            <style jsx >{`
                .List__icon {
                    margin: 0 24px;
                }
                .List__icon :global(> svg) {
                    height: 32px;
                    width: 32px;
                    stroke: ${COLORS[color]};
                }
                @media (max-width: 768px) {
                    .List__icon {
                        margin: 0 8px;
                    }
                }
            `}</style>
        </div>
    )
}

const ListTitle = ({ children }) => {
    return (
        <h3 className="List__title">
            {children}
            <style jsx >{`
                .List__title {
                    font-size: 18px;
                }
                @media (max-width: 768px) {
                    .List__title {
                        font-size: 14px;
                    }
                }
            `}</style>
        </h3>
    )
}

const ListCopy = ({ children, isSelected }) => {
    return (
        <p className={`${isSelected ? "List__copy List__copy--visible" : "List__copy"}`}>
            {children}
            <style jsx >{`
                .List__copy {
                    font-size: 14px;
                    padding: 16px 24px 32px 104px;
                    line-height: 1.4;
                    margin-top: -100%;
                    transition: margin-top .75s ease;
                }
                .List__copy--visible {
                    margin-top: 0;
                }
                @media (max-width: 768px) {
                    .List__copy {
                        font-size: 12px;
                        padding-left: 74px;
                    }
                }
            `}</style>
        </p>
    )
}

Object.defineProperties(List, {
    Heading: { value: ClassNames.extend(ListHeading, 'ListHeading')},
    Item: { value: ClassNames.extend(ListItem, 'ListItem')},
    Icon: { value: ClassNames.extend(ListIcon, 'ListIcon')},
    Title: { value: ClassNames.extend(ListTitle, 'ListTitle')},
    Copy: { value: ClassNames.extend(ListCopy, 'ListCopy')}
})

export default List;