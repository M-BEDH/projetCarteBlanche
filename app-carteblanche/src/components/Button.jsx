
const CustomBtn = ({ children, style = {},  ...props }) => {

  const defaultStyle = {
    backgroundColor: "yellow",
    border: "none",
    color: "black",
    padding: "15px 30px",
    textAlign: "center",
    textDecoration: "none",
    borderRadius: "7px",
    display: "block",
    margin: "5px auto",
    width: "220px"
  };

  const styleBtn = {...defaultStyle, ...style}
   return (
    <button style={styleBtn}{...props}>
      {children}
    </button>
  );
};

export default CustomBtn;