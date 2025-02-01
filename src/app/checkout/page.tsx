'use client'
import { useState } from "react";

export default function Checkout() {
  const [amount, setAmount] = useState(0);
  const [clientSecret, setClientSecret] = useState("");

  const handlePayment = async () => {
    const response = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    });

    const data = await response.json();
    setClientSecret(data.clientSecret);
  };

  return (
    <div className="flex flex-col items-center justify-center my-32">
      <h1 >Checkout</h1>
      <input
        type="number"
        placeholder="Amount in cents"
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button onClick={handlePayment}>Pay</button>

      {clientSecret && <p>Payment Intent Created! Client Secret: {clientSecret}</p>}
    </div>
  );
}
