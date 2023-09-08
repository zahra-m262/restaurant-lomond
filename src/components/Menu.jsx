import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { useGetFoodsQuery } from "../slices/foodApi";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../slices/cartSlice";
import "./style/Menu.scss";
import QtyInput from "./common/QtyInput";
import { useEffect } from "react";
import CustomNumeralNumericFormat from "./Price";

const Menu = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const { data: foods } = useGetFoodsQuery();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (food) => {
    dispatch(addToCart(food));
  };

  const handleDecreaseCart = (foodCart) => {
    dispatch(decreaseCart(foodCart));
  };

  const handleRemove = (foodCart) => {
    dispatch(removeFromCart(foodCart));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="menu-container">
      <header>
        <h1 className="menu-header">
          <Link to="/">
            <i className="cart-logo" style={{ color: "#fff" }}>
              <ion-icon name="restaurant"></ion-icon>
            </i>
          </Link>
          Food Ordering App
        </h1>
      </header>

      <>
        <main className="main">
          <section className="menu" id="menu-section-item">
            <h2 className="order-list-header">Menu</h2>
            <table>
              {foods?.map((food) => (
                <thead>
                  <tr key={food.id}>
                    <td className="cart-id">{food.id}</td>
                    <td className="cart-title">{food.title}</td>

                    <td>
                      <img
                        className="cart-img"
                        src={`http://localhost:9000/images/${food.pic}`}
                        alt={food.title}
                      />
                    </td>

                    <td>
                      {/* <i style={{ fontSize: "1rem" }}>{item.price}</i> */}
                      <CustomNumeralNumericFormat
                      className='cart-price'
                        value={food.price}
                        thousandSeparator=","
                      />
                    </td>
                    <td>
                      <button
                        onClick={() => handleAddToCart(food)}
                        className="add-btn"
                      >
                        ADD
                      </button>
                    </td>
                  </tr>
                </thead>
              ))}
            </table>
          </section>
          <section className="order-list" id="menu-section">
            <h2 className="order-list-header">Order(s)</h2>

            {cart.cartItems.length === 0 ? (
              <p style={{ fontFamily: "nunito" }}>
                Your Cart is currently empty
              </p>
            ) : (
              <table className="order-tbl">
                <thead>
                  <th>#</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </thead>

                <tbody>
                  {cart.cartItems.map((foodCart) => (
                    <tr key={foodCart.id}>
                      <td>{foodCart.id}</td>
                      <td>{foodCart.title}</td>

                      <td>
                        <CustomNumeralNumericFormat
                          value={foodCart.price * foodCart.cartQty}
                          thousandSeparator=","
                          prefix="$"
                        />
                        <button
                          style={{
                            border: "none",
                            backgroundColor: "transparent",
                          }}
                          onClick={() => handleRemove(foodCart)}
                        >
                          <i
                            style={{
                              color: "red",
                              fontSize: "1rem",
                            }}
                          >
                            <ion-icon name="trash-outline"></ion-icon>
                          </i>
                        </button>
                      </td>
                      <td>
                        <QtyInput
                          qty={foodCart.cartQty}
                          decrementQty={() => handleDecreaseCart(foodCart)}
                          incrementQty={() => handleAddToCart(foodCart)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
                <div className="cart-summary">
                  <button
                    onClick={() => handleClearCart()}
                    className="clear-cart"
                  >
                    Clear Cart
                  </button>
                  <div className="cart-checkout">
                    <div className="subtotal">
                      <span>SubTotal</span>
                      <span className="amount">
                        $
                        <CustomNumeralNumericFormat
                          value={cart.cartTotalAmount}
                          thousandSeparator=","
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </table>
            )}
          </section>
        </main>
      </>
    </div>
  );
};

export default Menu;
