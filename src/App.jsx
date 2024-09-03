import { Route, Routes } from "react-router-dom";
import "./style/Reset.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import ItemList from "./pages/ItemList";
import ItemDetail from "./pages/ItemDetail";
import AddItem from "./pages/AddItem";
import EditItem from "./pages/EditItem";
import ItemManagement from "./pages/ItemManagement";
import ShopInfo from "./pages/ShopInfo";
import TransactionList from "./pages/TransactionList";
import TransactionDetail from "./pages/TransactionDetail";
import MyInfo from "./pages/MyInfo";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/list" element={<ItemList />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/item/add" element={<AddItem />} />
        <Route path="/item/edit/:id" element={<EditItem />} />
        <Route path="/item/management" element={<ItemManagement />} />
        <Route path="/shop" element={<ShopInfo />} />
        <Route path="/transaction/list" element={<TransactionList />} />
        <Route path="/transaction/:id" element={<TransactionDetail />} />
        <Route path="/my" element={<MyInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
