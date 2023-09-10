import React, { useState, useEffect } from "react";
import Input from "../Common/Input"; // You may need to replace "../Common/Input" with the actual path to your Input component.
import DefaultButton from "../Common/DefaultButton"; // You may need to replace "../Common/DefaultButton" with the actual path to your DefaultButton component.

function Form() {
  const [item, setItem] = useState("");
  const [cashier1Items, setCashier1Items] = useState([]);
  const [cashier2Items, setCashier2Items] = useState([]);
  const [cashier3Items, setCashier3Items] = useState([]);
  const [currentCashierIndex, setCurrentCashierIndex] = useState(0);
  const [isDecrementing1, setIsDecrementing1] = useState(false);
  const [isDecrementing2, setIsDecrementing2] = useState(false);
  const [isDecrementing3, setIsDecrementing3] = useState(false);

  const handleInput = (e) => {
    setItem(e.target.value);
  };

  const handleAddItemButton = () => {
    if (item !== "" && item !== undefined) {
      if (currentCashierIndex === 0) {
        setCashier1Items([...cashier1Items, item]);
        setCurrentCashierIndex(1);
        if (!isDecrementing1) {
          setIsDecrementing1(true);
        }
      } else if (currentCashierIndex === 1) {
        setCashier2Items([...cashier2Items, item]);
        setCurrentCashierIndex(2);
        if (!isDecrementing2) {
          setIsDecrementing2(true);
        }
      } else if (currentCashierIndex === 2) {
        setCashier3Items([...cashier3Items, item]);
        setCurrentCashierIndex(0);
        if (!isDecrementing3) {
          setIsDecrementing3(true);
        }
      }
    }
  };

  const handleDecrement = () => {
    // decrement to cashier1items
    if (cashier1Items.length === 0) {
      setIsDecrementing1(false);
    }
    if (cashier1Items[0] > 0 && isDecrementing1) {
      const updatedCashier1Items = [...cashier1Items];
      updatedCashier1Items[0]--;
      setCashier1Items(updatedCashier1Items);
    } else {
      const updatedCashier1Items = cashier1Items.filter(
        (_, index) => index !== 0
      );
      setCashier1Items(updatedCashier1Items);
    }

    // decrement to cashier2items
    if (cashier2Items.length === 0 && isDecrementing2) {
      setIsDecrementing2(false);
    }
    if (cashier2Items[0] > 0) {
      const updatedCashier2Items = [...cashier2Items];
      updatedCashier2Items[0]--;
      setCashier2Items(updatedCashier2Items);
    } else {
      const updatedCashier2Items = cashier2Items.filter(
        (_, index) => index !== 0
      );
      setCashier2Items(updatedCashier2Items);
    }

    // decrement to cashier3items
    if (cashier3Items.length === 0) {
      setIsDecrementing3(false);
    }
    if (cashier3Items[0] > 0 && isDecrementing3) {
      const updatedCashier3Items = [...cashier3Items];
      updatedCashier3Items[0]--;
      setCashier3Items(updatedCashier3Items);
    } else {
      const updatedCashier3Items = cashier3Items.filter(
        (_, index) => index !== 0
      );
      setCashier3Items(updatedCashier3Items);
    }
  };

  useEffect(() => {
    if (isDecrementing1 || isDecrementing2 || isDecrementing3) {
      const intervalId = setInterval(handleDecrement, 2000); // Decrement every 2 seconds

      return () => {
        clearInterval(intervalId); // Cleanup the interval when the component unmounts
      };
    }
  }, [
    isDecrementing1,
    isDecrementing2,
    isDecrementing3,
    cashier1Items,
    cashier2Items,
    cashier3Items,
  ]);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <div
          style={{
            paddingTop: "20px",
            border: "1px solid #000",
            width: "90px",
            height: "50px",
            marginBottom: "5px",
          }}
        >
          Cashier 1
        </div>
        {cashier1Items.map((item, key) => (
          <div
            style={{
              padding: "20px",
              border: "1px solid #000",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              textAlign: "center",
              marginBottom: "5px",
            }}
            key={key}
          >
            {item}
          </div>
        ))}
      </div>
      <div style={{ marginLeft: "10px" }}>
        <div
          style={{
            paddingTop: "20px",
            border: "1px solid #000",
            width: "90px",
            height: "50px",
            marginBottom: "5px",
          }}
        >
          Cashier 2
        </div>
        {cashier2Items.map((item, key) => (
          <div
            style={{
              padding: "20px",
              border: "1px solid #000",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              textAlign: "center",
              marginBottom: "5px",
            }}
            key={key}
          >
            {item}
          </div>
        ))}
      </div>
      <div style={{ marginLeft: "10px" }}>
        <div
          style={{
            paddingTop: "20px",
            border: "1px solid #000",
            width: "90px",
            height: "50px",
            marginBottom: "5px",
          }}
        >
          Cashier 3
        </div>
        {cashier3Items.map((item, key) => (
          <div
            style={{
              padding: "20px",
              border: "1px solid #000",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              textAlign: "center",
              marginBottom: "5px",
            }}
            key={key}
          >
            {item}
          </div>
        ))}
      </div>
      <div style={{ marginLeft: "20px" }}>
        <Input type={"number"} onChange={handleInput} value={item} />
        <DefaultButton text={"Add"} onClick={handleAddItemButton} />
      </div>
    </div>
  );
}

export default Form;
