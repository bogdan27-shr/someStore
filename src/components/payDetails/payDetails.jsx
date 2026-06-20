import { useEffect, useState } from 'react';
import './payDetails.scss';
import closeIcon from '../../img/close.svg';

export function PayDetails ({
  total, 
  setOpenPay, 
  closePay, 
  setClosePay
}){
  const [valRes, setValRes] = useState(false);
  const [errVal, setErrVal] = useState(false);
  const [genErr, setGenErr] = useState(false);

  const closeForm = () => {
    setClosePay(true);
    setTimeout(() => {
      setOpenPay(false);
      setClosePay(false);
    }, 195);
  }

  useEffect(() => {
    document.body.classList.toggle(`activeMB`);
    return () => {
      document.body.classList.toggle(`activeMB`);
    }
  }, []);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [numCard, setNumCard] = useState('');
  const [dateCard, setDateCard] = useState('');
  const [cvvNum, setCvvNum] = useState('');

  const validName = /^[a-z а-я а-яїіє]{2,18}$/i;
  const validPhone = /^\+[0-9 ]{8,15}$/;
  const validEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  const validAddress = 8;
  const validNumCard = /^([0-9]{16}|[0-9 ]{19})$/;
  const validDateCard = /^([0-9]{2}|[0-9]{4})[./]([0-9]{2}|[0-9]{4})$/;
  const validCvvNum = /^[0-9]{3}$/;

  return(
    <>
      <div className={`modal ${closePay ? 'closeF' : ''}`}>
        <div className="details">

          <div 
            className="close"
            onClick={() => {
              closeForm();
            }}
          >
            <img src={closeIcon} alt="Close"/>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if(
                validName.test(name) &&
                validPhone.test(phone) &&
                validEmail.test(email) &&
                validAddress <= address.length
              ){
                if(
                  validNumCard.test(numCard) &&
                  validDateCard.test(dateCard) &&
                  validCvvNum.test(cvvNum)
                ){
                  console.log('+');
                  setValRes(true);
                  setTimeout(() => {
                    setValRes(false);
                  }, 5010);
                }else{
                  setErrVal(true);
                  setTimeout(() => {
                    setErrVal(false);
                  }, 5010);
                }
              }else{
                setGenErr(true);
                setTimeout(() => {
                  setGenErr(false);
                }, 5010);
              }
            }}
          >
            <input 
              type="text" 
              id='userName' 
              placeholder='Your name'
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input 
              type="tel" 
              id="userPhone" 
              placeholder='Your phone number'
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <input 
              type="email" 
              id="userEmail" 
              placeholder='Your email'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input 
              type="text" 
              id='userAddress' 
              placeholder='Your city, street and home'
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />

            <div className="userCreditC">
              <input 
                type="text" 
                id="creditCardNum" 
                placeholder='Number credit card'
                onChange={(e) => {
                  setNumCard(e.target.value);
                }}
              />
              <input 
                type="text" 
                id='dateCard' 
                placeholder='Date credit card'
                onChange={(e) => {
                  setDateCard(e.target.value);
                }}
              />
              <input 
                type="text" 
                id="cvvCode" 
                placeholder='CVV'
                onChange={(e) => {
                  setCvvNum(e.target.value);
                }}
              />
            </div>

            <input type="submit" value={`Pay now $${total.toFixed(2)}`}/>
            
            {
              valRes && (
                <div className="modalResult">
                  <div className="allOk">
                    <p>We will send a receipt to <span>{email}</span></p>
                  </div>
                </div>
              )
            }
            {
              errVal && (
                <div className="modalResult">
                  <div className="someP">
                    <p>The bank card details are incorrect</p>
                  </div>
                </div>
              )
            }
            {
              genErr && (
                <div className="modalResult">
                  <div className="someP">
                    <p>The data is incorrect</p>
                  </div>
                </div>
              )
            }

          </form>
        </div>
      </div>
    </>
  );
}