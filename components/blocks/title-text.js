import COLORS from "../../utils/colors";
import DIMENSIONS from "../../utils/dimensions";

const TitleText = ({ children, align }) => (
  <div>
    {children}
    <style jsx>{`
      align-self: center;
      color: ${COLORS.GRAY_6};
      font-size: ${DIMENSIONS.FONT_SIZES[4]};
      font-weight: 400;
      text-align: ${align || "left"};
    `}</style>
  </div>
);

export default TitleText;