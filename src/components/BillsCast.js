import React from 'react';
import BillCard from './BillCard'

export default function BillsCast({cast, handleAddBill, handleRemoveBill}) {
  const billCast = cast.map(bill => {
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
    <div className="ui segment inverted blue bill-cast">
      <div className="ui five column grid">
        <div className="row bill-cast-row">
          {billCast}
        </div>
      </div>
    </div>
  );
}

