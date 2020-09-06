import React from "react"

const Cart = ({ cart }) => {
  return (
    <div className="container mt-4">
      {cart.map((i) => (
        <div key={i.id}>Item number {i.id}</div>
      ))}
    </div>
  )
}

export default Cart
