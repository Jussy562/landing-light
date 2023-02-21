import React from 'react';

function Submit() {
  return <div className='pt-4 pe-0'>
      <div className='payNow'>
          <div className='col-6 text-start'>
              <a href='/' className='btn btn-primary submit-btn'>Pay Now</a>
          </div>
          <div className='col-6 text-end total-div'>
              <p className='total m-0'>TOTAL: &#8358;2556.64</p>
          </div>
      </div>
  </div>;
}

export default Submit;
