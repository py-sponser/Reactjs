

import NavBar from "./Components/NavBar/NavBar";
import ContentBrief from "./Components/BodyContent/ContentBrief";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./contexts/Cart/CartProvider";


const App = () => {
  return (
    <CartProvider>
        <NavBar />
        <ContentBrief />
        <Meals />
    </CartProvider>
  );
}

export default App;
