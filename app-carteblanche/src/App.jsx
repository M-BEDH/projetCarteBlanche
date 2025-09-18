import { Component } from "react";
import MyCarteBlanche from "./components/Carteblanche";

class App extends Component {
  state = {
    footer: true,
  };
  render() {
    return (
      <div>
        <MyCarteBlanche
          footer={this.state.footer}
          kidsChangeFooter={this.handleChangeStateFooter}
        />
      </div>
    );
  }

  handleChangeStateFooter = () => {
    this.setState({ footer: this.state.footer === false });
  };
}

export default App;
