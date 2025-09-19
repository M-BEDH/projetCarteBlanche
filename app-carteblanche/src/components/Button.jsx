
const CustomBtn = ({ children, btnStyle, onClick }) => {

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
   return (
    <button onClick={onClick} style={{...defaultStyle, ...btnStyle}} >
      {children}
    </button>
  );
};

export default CustomBtn;