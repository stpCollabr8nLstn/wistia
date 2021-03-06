import ClassNames from "../../utils/classnames";
import COLORS from "../../utils/colors";
import DIMENSIONS from "../../utils/dimensions";

const LinkListItemList = ({ children }) => (
    <div className="LinkList__item-list">
        {children}
        <style jsx>{`
            .LinkList__item-list {
                display: flex;
                flex-direction: column;
            }
        `}</style>
    </div>)
const LinkListSection = ({ children }) => (
    <h4>
        {children}
        <style jsx>
            {`
                margin-top: 24px;
                font-size: ${DIMENSIONS.FONT_SIZES[2]};
            `}
        </style>
    </h4>)
const LinkListItem = ({ children, href }) => (
    <a href={href}>
        {children}
        <style jsx>
            {`
                font-size: ${DIMENSIONS.FONT_SIZES[1]};
                margin-top: 16px;
                color: ${COLORS.SKY_BLUE};
                text-decoration: none;
            `}
        </style>
    </a>
    
)

const LinkList = ({ children }) => (
    <div>{children}</div>
)

Object.defineProperties(LinkList, {
    Section: {
        value: ClassNames.extend(LinkListSection, "LinkListSection")
    },
    ItemList: {
        value: ClassNames.extend(LinkListItemList, "LinkListItemList")
    },
    Item: {
        value: ClassNames.extend(LinkListItem, "LinkListItem")
    }
});

export default LinkList;