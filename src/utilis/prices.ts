export interface PriceDetails {
  title: string;
  price: string;
  total: string;
  subtotal: string;
  iva: string;
}
export const priceDetails: Record<string, PriceDetails> = {
  MXN: {
    title: "PLAN CLÁSICO",
    price: "$299.00 MXN",
    total: "299",
    subtotal: "251,16", //84%
    iva: "47.84", //16%
  },
  USD: {
    title: "PLAN BLACK",
    price: "$14.99 USD",
    total: "14.99",
    subtotal: "13.43",
    iva: "2.56",
  },
};
