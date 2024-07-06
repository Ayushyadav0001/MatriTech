import React, { useState } from "react";
import HeaderMenu from "../HeadreForMenu/Head";
import Modal from "react-modal";
import { Link } from "react-router-dom";
const menuItems = [
  {
    id: 1,
    name: "Hamburger",
    price: 200,
    image: "burger.jpeg",
  },
  {
    id: 2,
    name: "Fries",
    price: 100,
    image: "fries.jpeg",
  },
  {
    id: 3,
    name: "Coke",
    price: 50,
    image: "coke.jpeg",
  },
  {
    id: 4,
    name: "Pepsi",
    price: 50,
    image: "pepsi.jpeg",
  },
];

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '500px',
  },
};

const Menu = () => {
  const [cart, setCart] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter(cartItem => cartItem.id !== item.id));
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <>
      <HeaderMenu cartItemCount={cart.length} openCart={openModal} />
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {menuItems.map((item) => (
            <div key={item.id} className="border p-4 rounded shadow">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 rounded" />
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p className="text-gray-600">Price: {item.price}</p>
              <div className="flex items-center mt-4">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded mr-2"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
                <button
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded ml-2"
                  onClick={() => removeFromCart(item)}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Cart Modal" style={customStyles}>
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        {menuItems.map((item) => {
          const itemCount = cart.filter(cartItem => cartItem.id === item.id).length;
          return itemCount > 0 ? (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <span>{item.name} :</span>
              <div className="flex items-center">
                <button
                  className="bg-blue-600 text-white px-2 py-1 rounded"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
                <span className="mx-2">{itemCount}</span>
                <button
                  className="bg-pink-600 text-white px-2 py-1 rounded"
                  onClick={() => removeFromCart(item)}
                >
                  -
                </button>
              </div>
            </div>
          ) : null;
        })}
        <div className="mt-4">
          <span>Total (INR): {getTotalPrice()}</span>
        </div>
        <div className="flex justify-end mt-4">
          <button onClick={closeModal} className="bg-gray-600 text-white px-4 py-2 rounded mr-2">
            Cancel
          </button>
          <Link to={"/checkout"} className="bg-blue-600 text-white px-4 py-2 rounded">
            Save and Checkout
          </Link>
        </div>
      </Modal>
    </>
  );
};

export default Menu;
