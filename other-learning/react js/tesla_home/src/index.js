import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./component/header";
import Accessories from './assets/Desktop-Accessories.jpg';
import Model3 from './assets/Desktop-Model3.jpeg';
import ModelS from './assets/Desktop-ModelS.jpeg';
import ModelX from './assets/Desktop-ModelX.jpeg';
import ModelY from './assets/Desktop-ModelY.jpeg';
import SolarPanels from './assets/Desktop-SolarPanels.jpeg';
import SolarRoof from './assets/Desktop-SolarRoof.jpeg';
import Item from './component/item';

function App(){
  return (<div>
    <Header/>
    <div className = "item_container">
      <Item
      title = 'Lowest Cost Solar Panel in India'
      desc = "Money-back Guarantee"
      backgroundImg = {SolarPanels}
      leftBtnTxt = "ORDER NOW"
      leftBtnLink = ""
      rightBtnText = "LEARN MORE"
      rightBtnLink = ""
      first
      twobtn = "true"
      />
      <Item>
      title = 'MODEL S'
      desc = "Starting at 49lakhs*"
      backgroundImg = {ModelS}
      leftBtnTxt = "CUSTOM ORDER"
      leftBtnLink = ""
      rightBtnText = "EXISTING INVENTORY"
      rightBtnLink = ""
      twobtn = "true"
      </Item>
      <Item>
      title = 'MODEL 3'
      desc = "Order Online of Touchless Delivery"
      backgroundImg = {Model3}
      leftBtnTxt = "CUSTOM ORDER"
      leftBtnLink = ""
      rightBtnText = "EXISTING INVENTORY"
      rightBtnLink = ""
      twobtn = "true"
      </Item>
      <Item>
      title = 'MODEL X'
      desc = "Order Online of Touchless Delivery"
      backgroundImg = {ModelX}
      leftBtnTxt = "CUSTOM ORDER"
      leftBtnLink = ""
      rightBtnText = "EXISTING INVENTORY"
      rightBtnLink = ""
      twobtn = "true"
      </Item>
      <Item>
      title = 'MODEL Y'
      desc = "Order Online of Touchless Delivery"
      backgroundImg = {ModelY}
      leftBtnTxt = "CUSTOM ORDER"
      leftBtnLink = ""
      rightBtnText = "EXISTING INVENTORY"
      rightBtnLink = ""
      twobtn = "true"
      </Item>
      <Item>
      title = 'Solar for New Roof'
      desc = "Solar Roof Costs Less Than a New Roof Plus Solar Panels"
      backgroundImg = {SolarRoof}
      leftBtnTxt = "ORDER NOW"
      leftBtnLink = ""
      rightBtnText = "LEARN MORE"
      rightBtnLink = ""
      twobtn = "true"
      </Item>
      <Item>
      title = 'Accessories'
      desc = ""
      backgroundImg = {Accessories}
      leftBtnTxt = "SHOP NOW"
      leftBtnLink = ""
      rightBtnText = ""
      rightBtnLink = ""
      twobtn = "false"
      </Item>
    </div>
    </div>);
}


ReactDOM.render(<App/>,document.getElementById('root'));

export default App;