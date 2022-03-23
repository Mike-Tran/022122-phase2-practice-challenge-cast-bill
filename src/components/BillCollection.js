import React from 'react';
import BillCard from './BillCard';

export default function BillCollection({collection, handleAddBill, handleRemoveBill}) {
  const billCollection = collection.map(bill => {
    return (
      <BillCard 
        bill={bill} 
        key={bill.id} 
        handleAddBill={handleAddBill}
        handleRemoveBill={handleRemoveBill}
      />
    )
  });

  return (
    <div className="ui four column grid">
      <div className="row">
        {billCollection}
      </div>
    </div>
  );
}
