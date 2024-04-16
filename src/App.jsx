import "./App.css";

import BenepassCardView from "./components/benepass-card/BenepassCardView";

const cardData = {
  cardNumber: "1232 2223 4432 1732",
  expDate: "8/28",
  cvc: "345",
  zipCode: "66062",
  type: "virtual",
};

function App() {
  return <BenepassCardView cardData={cardData} />;
}

export default App;
