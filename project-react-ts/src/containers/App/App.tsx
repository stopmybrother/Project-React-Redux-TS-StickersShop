import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../../components/common-components/Layout/Layout";
import { MainPage } from "../../pages/MainPage/MainPage";
import { ShopPage } from "../../pages/ShopPage/ShopPage";
import { WishListPage } from "../../pages/WishListPage/WishListPage";
import { BasketPage } from "../../pages/BasketPage/BasketPage";
import { CheckoutPage } from "../../pages/CheckoutPage/CheckoutPage";

const App = () => {
  return (
      <>
          <Routes>
              <Route element = { <Layout /> }>
                  <Route path = "/" element = { <Navigate replace to = "/home" /> } />
                  <Route path = "/home/*" element = { <MainPage /> } />
                  <Route path = "/shop/*" element = { <ShopPage /> } />
                  <Route path = "/wishList/*" element = { <WishListPage /> } />
                  <Route path = "/basket/*" element = { <BasketPage /> } />
                  <Route path = "/checkout/*" element = { <CheckoutPage /> } />
              </Route>
          </Routes>
      </>
  );
};

export default App;
