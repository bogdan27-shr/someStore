import './totalPrice.scss';
import {PayDetails} from '../../../components/payDetails/payDetails';
import { useState } from 'react';

export function TotalPrice ({cart}) {
  const [openPay, setOpenPay] = useState(false);
  const [closePay, setClosePay] = useState(false);

  const total = cart.reduce((a, p) => a + p.price, 0);

  if(cart.length <= 0){
    return
  }

  return(
    <>
      <button
        id="pay"
        onClick={() => {
          setOpenPay(true);
        }}
      >
        ${total.toFixed(2)} To be paid
      </button>

      {
        openPay && (
          <PayDetails
            total={total}
            setOpenPay={setOpenPay}
            closePay={closePay}
            setClosePay={setClosePay}
          />
        )
      }
    </>
  );
}