import COLORS from "../../utils/colors";

const TitleText = ({ children, align }) => (
  <div>
    {children}
    <style jsx>{`
      align-self: center;
      color: ${COLORS.GRAY_6};
      font-size: 32px;
      font-weight: 400;
      text-align: ${align || "left"};
    `}</style>
  </div>
);

export default TitleText;