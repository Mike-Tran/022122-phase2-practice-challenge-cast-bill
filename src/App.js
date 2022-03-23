import React, {useState, useEffect} from 'react';
import BillCollection from './components/BillCollection';
import BillsCast from './components/BillsCast';

const API = "http://localhost:8002/bills";

export default function App() {
  const [cast, setCast] = useState([])
  const [collection, setCollection] = useState([])
  const [removeCard, setRemoveCard] = useState(false);
  // const [removeFromCast, setRemoveFromCast] = useState(false);

  function loadCast() {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        console.log("Data fetched!", data);
        setCollection(data);
    });
  }

  function handleAddBill(newBill) {
    const newCastArray = cast.filter(bill => bill.id !== newBill.id);
    setCast([...newCastArray, newBill]);
  }

  function handleRemoveBill(removeBill) {
    const cardId = removeBill.id
    const newCastArray = cast.filter(bill => bill.id !== removeBill.id);
    fetch(`${API}/${cardId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
    }
   }).then(
      setRemoveCard(!removeCard)
   )
   setCast([...newCastArray]);
  }

  useEffect(() => {
    console.log("Fetching data...");
    loadCast(); 
  }, [removeCard]);

  return (
    <div>
      <BillsCast 
        cast={cast} 
        handleAddBill={handleAddBill} 
        handleRemoveBill={handleRemoveBill}
      />
      <BillCollection 
        collection={collection} 
        handleAddBill={handleAddBill} 
        handleRemoveBill={handleRemoveBill}
      />
    </div>
  );
}
