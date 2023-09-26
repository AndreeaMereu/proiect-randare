import { useState } from 'react'

const LivrareCargus = () => {
  return <h1>Cargus Express - servicii curierat</h1>
}

function getColor(count) {
  if (count < 36) {
    return "standard";
  }

  if (count >= 10 && count < 24) {
    return "redCode";
  }

  if (count >= 1 && count < 6) {
    return "express";
  }
}

function App () {
return (
  <div>
  <LivrareCargus />
</div>
);
}

export default App
