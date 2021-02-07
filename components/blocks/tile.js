import ClassNames from "../../utils/classnames";
import COLORS from "../../utils/colors";

const Tile  = ({ children }) => {
    return (
        <div className="Tile">{children}
            <style jsx>
                {`
                    .Tile {
                        display: flex;
                        flex-direction: column;
                    }
                    .Tile :global(> h3) {
                        font-size: 18px;
                        font-weight: 600;
                    }
                `}
            </style>
        </div>
    )    
}

const TileCircle = ({ children, backgroundColor}) => {
    return (
        <div className="Tile__circle">
            {children}
            <style jsx>{`
                .Tile__circle {
                    height: 128px;
                    width: 128px;
                    border-radius: 50%;
                    background: ${backgroundColor};
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }  
            `}</style>
        </div>
    )
}

const TileIcon = ({ children, strokeColor, fillColor, pushDown}) => {
    return (
        <div className={`${pushDown ? "Tile__icon Tile__icon--down" : "Tile__icon"}`}>
            {children}
            <style jsx>{`
                .Tile__icon {
                    height: 64px;
                    width: 64px;
                }
                .Tile__icon :global(> svg),
                .Tile__icon :global(> svg g)
                 {
                    stroke: ${strokeColor};
                    fill: ${fillColor || "transparent"};
                }
                .Tile__icon--down {
                    position: relative;
                    top: 12px;
                }
            `}</style>
        </div>
    )
}

Object.defineProperties(Tile, {
    Circle: {
        value: ClassNames.extend(TileCircle, "TileCircle")
    },
    Icon: {
        value: ClassNames.extend(TileIcon, "TileIcon")
    }
});

export default Tile;