import { useState } from 'react'

const LivrareCargus = () => {
  return <h1>Cargus Express - servicii curierat</h1>
}

function getColor(count) {
  if (count >= 24 && count < 36) {
    return "standard";
  }

  if (count >= 6 && count < 24) {
    return "redCode";
  }

  if (count >= 1 && count < 6) {
    return "express";
  }

  return "termen-livrare-depasit";
}

function TipLivrare({ count, className }) {
  if (count >= 24 && count < 36) {
    return <h2 className={className}>Standard</h2>;
  }

  if (count >= 6 && count < 24) {
    return <h2 className={className}>Red Code</h2>;
  }

  if (count >= 1 && count < 6) {
    return <h2 className={className}>Express Loco</h2>;
  }
  return <h2 className={className}>Termen livrare depasit</h2>
}

function IntervalLivrare ({count, setCount}) {
  const handleOnIncrementClick = () => {
    setCount(count + 1);
  };
  const handleOnDecrementClick = () => {
    setCount(count - 1);
  };

  return (
    <div>
  <h1>{count} Ore</h1>
    <TipLivrare className={getColor(count)} count={count} />
  <button onClick={handleOnDecrementClick}>-</button>
  <button onClick={handleOnIncrementClick}>+</button>
  </div>
  );
};

function App () {
const [count, setCount] = useState(0);
return (
  <div>
  <LivrareCargus />
  <IntervalLivrare count={count} setCount={setCount} />
  <IntervalLivrare count={count} setCount={setCount} />
  <IntervalLivrare count={count} setCount={setCount} />
</div>
);
}

export default App
