import React from 'react';
import Amount from './amount';
import NavBar from './navBar';
import PaymentInfo from './paymentInfo';
import Submit from './submit';

function LandingPage() {
  return <div className='p-2 p-md-4 p-lg-5 pt-lg-4 m-0'>
      <NavBar />
      <hr />
      <PaymentInfo />
      <hr />
      <Amount />
      <hr />
      <Submit />
  </div>;
}

export default LandingPage;
