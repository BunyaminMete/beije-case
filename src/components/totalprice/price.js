import React, { useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../../context/shopContext";

const TotalPrice = () => {
  const [priceCalc, setPriceCalc] = React.useState(0);
  const { products, setPriceCheck } = useContext(MyContext);

  useEffect(() => {
    let amount = 0;
    let price = 0;
    Object.keys(products).map((item) => {
      if (item === "Standart Ped") {
        price = 2.973;
        amount += products[item] * price;
      }
      if (item === "Süper Ped") {
        price = 3.327;
        amount += products[item] * price;
      }
      if (item === "Süper+ Ped") {
        price = 3.748;
        amount += products[item] * price;
      }
      if (item === "Günlük Ped") {
        price = 1.972;
        amount += products[item] * price;
      }
      if (item === "Süper Günlük Ped") {
        price = 2.092;
        amount += products[item] * price;
      }
      if (item === "Mini Tampon") {
        price = 3.377;
        amount += products[item] * price;
      }
      if (item === "Standart Tampon") {
        price = 3.701;
        amount += products[item] * price;
      }
    });
    amount > 1 ? setPriceCheck(true) : setPriceCheck(false);
    setPriceCalc(amount.toFixed(2));
  }, [products]);

  return (
    <>
      <span>(₺{priceCalc})</span>
    </>
  );
};

export default TotalPrice;
