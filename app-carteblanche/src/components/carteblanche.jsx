import { Component } from "react";
import Header from "./Header";
import MyFooter from "./footer";
import styles from "./Css/myCss.module.css";
import styled from "styled-components";
import "./Css/style.css";
import "./Css/style.css";

const Title = {
  color: "red",
  fontSize: "40px",
};

const Button = styled.button`
  background-color: ${(props) => props.btncolor || "#4312f3"};
  color: white;
  font-size: 20px;
  padding: 10px;
`;

class MyCarteBlanche extends Component {
  state = {
    titleColor: "purple",
    headerColor: "#910735",
    btnColor: "#4312f3",
  };

  handleChangeColorBtn = () => {
    this.setState({
      btnColor: this.state.btnColor === "#4312f3" ? "#e67e22" : "#4312f3",
    });
  };

  handleChangeHeaderColor = () => {
    this.setState({
      headerColor: this.state.headerColor === "#910735" ? "blue" : "#910735",
    });
  };

  render() {

    return (
      <div>
        <Header color={this.state.headerColor} />
        <div>
          <Button onClick={this.handleChangeHeaderColor}>
            Cliquer pour changer couleur Header
          </Button>

          <h1 style={Title}>
            Choisissez une option :
          </h1>
          <div>
            <Button
              btncolor={this.state.btnColor}
              onClick={this.handleChangeColorBtn}
            >
              Cliquer pour changer couleur du bouton
            </Button>
         
          </div>
          <p className={styles.yellow}>
            <MyFooter />
          </p>
        </div>
      </div>
    );
  }
}

export default MyCarteBlanche;
