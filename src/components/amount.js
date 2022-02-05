import React from 'react';

function Amount() {
  return <div className='py-4'>
      <div className=' cost-row'>
          <div className='col-6 p-0 m-0 text-start'>
              <p className='cost-title'>Subtotal</p>
          </div>
          <div className='col-6 p-0 m-0 text-end'>
              <p className='cost-title'>&#8358;2,497.00</p>
          </div>
      </div>

      <div className='cost-row '>
          <div className='col-6 p-0 m-0 text-start'>
              <p className='cost-title'>Extimated TAX</p>
          </div>
          <div className='col-6 p-0 m-0 text-end'>
              <p className='cost-title'>&#8358;119.64</p>
          </div>
      </div>

      <div className='cost-row '>
          <div className='col-6 p-0 m-0 text-start'>
              <p className='cost-title m-0'>Promotional code: <span className='proCode'>Z4KXLM9A</span></p>
          </div>
          <div className='col-6 p-0 m-0 text-end'>
              <p className='cost-title'>&#8358;2,497.00</p>
          </div>
      </div>
  </div>;
}

export default Amount;
