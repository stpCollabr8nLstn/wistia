import propTypes from "prop-types";
import COLORS from "../../utils/colors";
import DIMENSIONS from "../../utils/dimensions";

const BodyText = ({ children, align }) => (
  <div>
    <div className="BodyText">{children}</div>
    <style jsx>
      {`
        .BodyText {
          color: ${COLORS.GRAY_5};
          font-size: ${DIMENSIONS.FONT_SIZES[2]};
          font-weight: 400;
          line-height: 1.5;
          margin: 25px auto 30px;
          text-align: ${align || "left"};
        }
        .BodyText :global(> a) {
          color: ${COLORS.SKY_BLUE};
          text-decoration: none;
        }

      `}
    </style>
  </div>
);

propTypes.align = propTypes.oneOf(["left", "right", "center"]);

Object.assign(BodyText, {
  defaultProps: {
    align: "left"
  },
  propTypes: {
    align: propTypes.align
  }
});

export default BodyText;