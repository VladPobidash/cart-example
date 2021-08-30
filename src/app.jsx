import React, { useState } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

function App() {
  const initialState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 0, id: 2, name: "Вилка" },
    { value: 4, id: 3, name: "Нож" },
    { value: 0, id: 4, name: "Глубокая тарелка" },
    { value: 0, id: 5, name: "Плоская тарелка" },
  ];
  const [counters, setCounters] = useState(initialState);
  const handleDelete = (counterId) => {
    setCounters(counters.filter((c) => c.id !== counterId));
  };
  const handleIncrement = (counterId) => {
    const newCounters = [...counters];
    const counter = newCounters.find((c) => c.id === counterId);
    counter.value += 1;

    setCounters([...newCounters]);
  };
  const handleDecrement = (counterId) => {
    const newCounters = [...counters];
    const counter = newCounters.find((c) => c.id === counterId);

    if (counter.value > 0) {
      counter.value -= 1;
      setCounters([...newCounters]);
    }
  };

  const handleReset = () => setCounters(initialState);

  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((a, c) => a + c.value, 0)} />
        <Counters
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
          onDelete={handleDelete}
          counters={counters}
        />
      </main>
    </div>
  );
}

export default App;
