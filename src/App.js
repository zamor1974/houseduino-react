import React from "react";

import Header from './components/header';
import Aside from './components/aside';
import Home from './components/home';
import Dati from './components/data';
import Footer from './components/footer';

const extraStyles = {
  // position: "fixed",
  // top: "30px",
  // left: 0,
  // right: 0,
  // bottom: 0,
  // background: "rgba(0, 0, 0, 0.4)",
  // color: "#FFF"
};
class App extends React.Component {

  state = {
    cliccato: false,
    menu: 0,
  }

  valoreMenu = (childData) => {
    //this.state.menu=childData;
    this.setState({ menu: childData })

  }
  clickAperturaChiusura = (childData) => {
    this.setState({ cliccato: childData })

  }
  render() {
    //const { idMenu } = this.state.menu;
    //const { cliccato } = this.state.cliccato;
    return (
      <div >
        
        <Header headerCallback={this.clickAperturaChiusura}></Header>
        <Aside asideCallback={this.valoreMenu} show={this.state.cliccato} duration={500} style={extraStyles} />

        console.log(this.state.menu);

        <Footer />
      </div>
    )
  }
}
export default App