import React, { useState } from 'react';
import { usePaymentInputs } from 'react-payment-inputs';
import { FcSimCardChip } from 'react-icons/fc';
// import { Form, Button, Row } from 'react-bootstrap';

function PaymentInfo() {
    const {
        // meta,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps
      } = usePaymentInputs();
    // const cardFigure = [/[1-9]/,/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/,/\d/];
    const [cardDetails, setCardDetails] = useState({
        cardHolder: "John Doe",
        cardNumber: "0000 0000 0000 0000",
        securityCode: "000",
        expirationDate: "02/24",
        postalCode: "0000",
    });
    const [isBack, setIsBack] = useState("front");
    const [payType, setPayType] = useState("paypal");
    const paypal = (e) => {
        e.preventDefault();
        setPayType("paypal");
    }
    const visa = (e) => {
        e.preventDefault();
        setPayType("visa");
    }

    const discover = (e) => {
        e.preventDefault();
        setPayType("discover");
    }
    const handleEvent = (e) => {
        e.preventDefault();
        setIsBack("back");
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        setIsBack("front")
    }
  return (
    <div className="col-12 m-0 py-4 payment-session">
      
        {/* <div className=' p-0 m-0'> */}
            <div className=' mb-2 mb-lg-3 payment-heading'>
                <div className='col-12 col-md-6 p-0 text-start'>
                    <h5 className='payment-info-title p-0 m-0'>Payment Information</h5>
                    <p className='p-0 m-0 payment-text'>Choose your method of payment</p>
                </div>

                <div className='col-12 col-md-6 p-0 text-center payment-icons-div'>
                    <div className='d-flex payment-icons '>
                        <div className='paytype d-flex'>
                            {
                                payType === "visa" ? 
                                <div className='dot col-2 me-2'>
                                    <div className='dot-blank rounded-circle'></div>
                                </div>
                                : " "
                            }
                            <img src="./images/visa.png" href="/" alt="visa" className='col-10 pay-icon me-1'
                            onClick={(e) => visa(e)}
                            />
                        </div>

                        <div className='paytype d-flex'>
                            
                            {
                                payType === "discover" ? 
                                <div className='dot col-2 me-2'>
                                    <div className='dot-blank rounded-circle'></div>
                                </div>
                                : " "
                            }
                         
                            <img src="./images/discov.png" href="/" alt="discover" className='col-10 pay-icon me-1'
                            onClick={(e) => discover(e)}
                            />
                        </div>
                        <div className='paytype d-flex'>
                            {
                                payType === "paypal" ? 
                                <div className='dot col-2 me-2'>
                                    <div className='dot-blank rounded-circle'></div>
                                </div>
                                : " "
                            }
                           <img src="./images/paypal.png" href="/" alt='paypal'className='col-10 pay-icon me-4 col-9'
                            onClick={(e)=>paypal(e)}
                            />
                        </div>
                        
                        
                        
                            {/* <FaCcVisa className='pay-icon me-4' />
                            <FaCcDiscover className='pay-icon me-4'/>
                            <FaPaypal className='pay-icon'/> */}
                    </div>
                </div>
            </div>
            <div className='   payment'>
              <div className='col-12 col-sm-12 col-md-6 p-0 card-container m-0  '>
                    {
                        isBack === "front" ?
                        <div className='card-info p-3 '>
                            <div className='col-8 p-0 text-start'>
                                <div className='card-number'>
                                    <p className='m-0 p-0'>CARD NUMBER</p>
                                    <p className='m-0 p-0'>{cardDetails.cardNumber}</p>
                                </div>

                                <div className='chip-icon p-0 '>
                                        <FcSimCardChip className='chipz'/>
                                </div>
                                <div className='card-date'>
                                    <p className='card-exp-date m-0 p-0'>EXPIRATION DATE</p>
                                    <p className='date p-0'>{cardDetails.expirationDate}</p>
                                </div>
                                <div className='card-holder'>
                                    <p className='name'>{cardDetails.cardHolder}</p>
                                </div>
                            </div>
                            <div className='col-4 master-icon-div m-0 p-0'>
                                <div className='master-icon'>
                                    <img className='m-icon' src='./images/mastercard.png' alt='master card' />
                                </div>
                            </div>
                        </div>
                        : 
                        <div className='back-card-info  '>
                            <div className='bar-div mt-3 mb-3'>
                                <div>
                                
                                </div>
                               
                            </div>

                            <div className='code-session p-3'>
                                <div className='security-div p-0 '>
                                        <div className='col-9 blank'>
                                            <div></div>
                                        </div>
                                        <div className='col-3 code '>
                                            <p className='m-0'>{cardDetails.securityCode}</p>
                                        </div>
                                </div>
                            </div>    
                        </div>
                    }
                    
                 
                </div>
                <div className=' col-12 col-md-6 master-card p-0 m-0'>
                        <form action='' className='p-o text-start '>
                            <div className='row formRow mb-3 p-0'>
                                <div className='col-6 '>
                                    <label for="cardNumber" class="form-label">Credit card number</label>
                                    <input type="tel" class="form-control" id="cardNumber" 
                                    value={cardDetails.cardNumber} placeholder="0000 0000 0000 0000"
                                    inputMode='numeric' pattern="(\d{4}\s?){4}"  autoComplete='cc-number' maxLength="19"
                                    {...getCardNumberProps()}
                                    onChange={(event) => setCardDetails({ ...cardDetails, cardNumber: event.target.value })}
                                    />
                                </div>
                                <div className='col-6'>
                                    <label for="cardName" class="form-label">Card Holder</label>
                                    <input type="text" class="form-control" id="cardName" 
                                    placeholder=""
                                    value={cardDetails.cardHolder}
                                    
                                    onChange={(event) => setCardDetails({ ...cardDetails, cardHolder: event.target.value })}
                                    />
                                </div>
                            </div>
                            <div className='row formRow mb-3 p-0'>
                                <div className='col-6 '>
                                    <label for="cardccv" class="form-label">Security code</label>
                                    <input type="tel" class="form-control" id="cardccv" placeholder="000" 
                                    pattern="[0-9\s]{0,3}" maxLength="3"
                                    value={cardDetails.securityCode}
                                    {...getCVCProps()}
                                    onChange={(event) => setCardDetails({ ...cardDetails, securityCode: event.target.value })}
                                    onMouseEnter={(e)=>handleEvent(e)}
                                    onMouseOut={(e)=> handleUpdate(e)}
                                    />
                                </div>
                                <div className='col-6'>
                                    <label for="postalCode" class="form-label">Postal code</label>
                                    <input type="tel" class="form-control" id="postalCode" placeholder="0000" 
                                    maxLength="4"
                                    value={cardDetails.postalCode}
                                    onChange={(event) => setCardDetails({ ...cardDetails, postalCode: event.target.value })}
                                    />
                                </div>
                            </div>
                            <div className='formGroup mb-3'>
                                <div className='col-6 mb-3'>
                                    <label for="cardDate" class="form-label">Expiration Date</label>
                                    <input type="text" class="form-control" id="cardDate" placeholder="" 
                                     value={cardDetails.expirationDate}
                                     {...getExpiryDateProps()}
                                     onChange={(event) => setCardDetails({ ...cardDetails, expirationDate: event.target.value })}
                                    />
                                </div>
                                <div class="form-check col-6">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Use this card for next time purchase
                                    </label>
                                </div>
                                
                            </div>
                            <a href='/' className='btn btn-primary add-btn'>Add card</a>
                        </form> 
                </div>            


            </div>
        {/* </div>    */}
      
  </div>);
}

export default PaymentInfo;
