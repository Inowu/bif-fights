import { useState } from "react";
import "./checkout.scss";
import PaymentComponent from "./components/CheckoutForm";
import Image from "next/image";
import promo from "../../../public/assets/promos/promo_24_mayo.png";

export default function CheckoutPage() {
  return (
    <div className="checkout-container relative">
      <Image src={promo} fill alt="bg" className="opacity-10 object-cover" />
      <div className="left z-[1]">
        <PaymentComponent />
      </div>
    </div>
  );
}
