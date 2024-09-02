import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ItemList from "./pages/ItemList";
import ItemDetail from "./pages/ItemDetail";
import AddItem from "./pages/AddItem";
import EditItem from "./pages/EditItem";
import ShopInfo from "./pages/ShopInfo";
import ItemManagement from "./pages/ItemManagement";
import TransactionHistory from "./pages/TransactionHistory";
import MyInfo from "./pages/MyInfo";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<ItemList />} />
      <Route path="/item/:id" element={<ItemDetail />} />
      <Route path="/new" element={<AddItem />} />
      <Route path="/edit/:id" element={<EditItem />} />
      <Route path="/shop" element={<ShopInfo />} />
      <Route path="/item/manage" element={<ItemManagement />} />
      <Route path="/history" element={<TransactionHistory />} />
      <Route path="/my" element={<MyInfo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
