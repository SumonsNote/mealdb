import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card/Card";
import Header from "./Header/Header";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const handleAddToCart = (food) => {
    const newCart = [...cart, food];
    setCart(newCart);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, []);
  return (
    <div className="App">
      <Header openModal={openModal} length={cart.length}></Header>

      <div className="card-container">
        {foods.map((food) => (
          <Card
            key={food.strMeal}
            food={food}
            handleAddToCart={handleAddToCart}
          ></Card>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
        <button onClick={closeModal}>Close</button>
          {cart.map((item) => (
            <h1 key={item.idMeal}>{item.strMeal}</h1>
          ))}
        </div>
      </Modal>
    </div>
  );
}

export default App;
