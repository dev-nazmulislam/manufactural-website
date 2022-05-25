import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Pages/Shared/Header/Navbar";
import Footer from "./Pages/Shared/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Account from "./Pages/Dashboard/Account";
import MyReviews from "./Pages/Dashboard/MyReviews";
import AllUser from "./Pages/Dashboard/AllUser";
import AllProduct from "./Pages/Dashboard/AllProduct";
import ManageProduct from "./Pages/Dashboard/ManageProduct";
import Purchase from "./Pages/Purchase/Purchase";
import PersonalInfo from "./Pages/Dashboard/PersonalInfo";
import InfoChange from "./Pages/Dashboard/InfoChange";
import AllOrders from "./Pages/Purchase/AllOrders";
import PanddingOrder from "./Pages/Purchase/PanddingOrder";
import CancelledOrder from "./Pages/Purchase/CancelledOrder";
import Complate from "./Pages/Purchase/Complate";
import Payment from "./Pages/Purchase/Payment";
import RequireAuth from "./Pages/Shared/RequerAuth/RequireAuth";
import RequireAdmin from "./Pages/Shared/RequerAuth/RequireAdmin";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route path="account" element={<Account />}>
            <Route index element={<PersonalInfo />} />
            <Route path="changeinfo" element={<InfoChange />} />
          </Route>
          <Route path="purchase" element={<Purchase />}>
            <Route index element={<AllOrders></AllOrders>} />
            <Route path="pandding" element={<PanddingOrder />} />
            <Route path="cancelled" element={<CancelledOrder />} />
            <Route path="complate" element={<Complate />} />
          </Route>
          <Route path="review" element={<MyReviews />} />
          <Route
            path="users"
            element={
              <RequireAdmin>
                <AllUser />
              </RequireAdmin>
            }
          />
          <Route
            path="addProduct"
            element={
              <RequireAdmin>
                <AllProduct />
              </RequireAdmin>
            }
          />
          <Route
            path="manageProduct"
            element={
              <RequireAdmin>
                <ManageProduct />
              </RequireAdmin>
            }
          />
        </Route>
        <Route path="payment" element={<Payment />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
