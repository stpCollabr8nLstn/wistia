import Tile from "../blocks/tile";
import { jobs } from "../../utils/copy";
import IconMapPin from "../icons/icon-map-pin";
import IconHeart from "../icons/icon-heart";
import IconHighFive from "../icons/icon-high-five";
import COLORS from "../../utils/colors";

const { location, values, human } = jobs;

const IconInfo = () => {
    return (
        <section className="IconInfo">
            <Tile>
                <Tile.Circle backgroundColor={COLORS.SKY_BLUE}>
                    <Tile.Icon strokeColor={COLORS.GOLD}>
                        <IconMapPin />
                    </Tile.Icon>
                </Tile.Circle>
                <h3>{location.heading}</h3>
                <p>{location.body}<a href="#">{location.link}</a></p>
            </Tile>
            <Tile>
                <Tile.Circle backgroundColor={COLORS.PINK}>
                    <Tile.Icon strokeColor={COLORS.GREEN}>
                        <IconHeart />
                    </Tile.Icon>
                </Tile.Circle>
                <h3>{values.heading}</h3>
                <p>{values.body}<a href="#">{values.link}</a></p>
            </Tile>
            <Tile>
                <Tile.Circle backgroundColor={COLORS.GOLD}>
                    <Tile.Icon pushDown fillColor={COLORS.BLUE} strokeColor={COLORS.BLUE}>
                        <IconHighFive />
                    </Tile.Icon>
                </Tile.Circle>
                <h3>{human.heading}</h3>
                <p>{human.body}<a href="#">{human.link}</a></p>
            </Tile>
            <style jsx>
                {`
                    .IconInfo {
                        display: flex;
                        max-width: 75%;
                        margin: 0 auto;
                    }
                    @media (max-width: 768px) {
                        .IconInfo {
                            flex-direction: column;
                            max-width: 100%;
                    }
                `}
            </style>
        </section>
    ) 
}

export default IconInfo;