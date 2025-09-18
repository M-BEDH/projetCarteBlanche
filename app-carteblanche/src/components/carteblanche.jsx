import { Component } from "react";
import Header from "./Header";
import ImageSlider from "./ImageSlider";
import ImageMap from "./ImageMap";
import MyFooter from "./footer";
import styles from "../Css/myCss.module.css";
import styled from "styled-components";
import "../Css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Title = {
  color: "red",
  fontSize: "40px",
};

const Button = styled.button`
  background-color: ${(props) => props.btncolor || "#4312f3"};
  color: white;
  font-size: 20px;
  padding: 10px;
  border-radius: 10px;
  margin: 2rem auto;
`;

class MyCarteBlanche extends Component {
  state = {
    titleColor: "purple",
    headerColor: "#ec1a60",
    fontSizeHeader: "40px",
    btnColor: "#1fc909",
  };

    handleChangeHeader = () => {
    this.setState({
      headerColor: this.state.headerColor === "#ec1a60" ? "#2433ff" : "#ec1a60",
      fontSizeHeader: this.state.fontSizeHeader === "40px" ? "30px" : "40px",
    });
  };



  handleChangeColorBtn = () => {
    this.setState({
      btnColor: this.state.btnColor === "#4312f3" ? "#02df39" : "#4312f3",
    });
  };


  // La gestion du footer se fait dans App.jsx, donc utilisation de la props onToggleFooter
  // pour appeler la méthode handleChangeFooter de App.jsx
  handleChangeFooterColor = () => {
    if (this.props.kidsChangeFooter) {
      this.props.kidsChangeFooter();
    }
  };

  render() {
    const myClass = this.props.footer ? "greenyellow" : "blueBkg";

    return (
      <div>
        <Header color={this.state.headerColor} fontSizeHeader={this.state.fontSizeHeader} />

        <ImageMap />

        <div>
          <Button onClick={this.handleChangeHeader}>
            Cliquer pour changer titre Header
          </Button>

          <h1 style={Title}>Choisissez une option : </h1>
        </div>

        <div>
          <Button
            btncolor={this.state.btnColor}
            onClick={this.handleChangeColorBtn}
          >
            Cliquer pour changer couleur de ce bouton
          </Button>
        </div>

        <div>
          <p className={`${myClass} sizeFont`}>Footer transformé</p>

          <button
            class="btn btn-outline-primary"
            onClick={this.handleChangeFooterColor}
          >
            Changer l'état via App.jsx true/false
          </button>

           <p className={styles.orange}>
            <MyFooter />
          </p>
          
        </div>

           {/* <div>
            <br />
            <ImageSlider />
          </div> */}

      </div>
    );
  }
}

export default MyCarteBlanche;
