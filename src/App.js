import React from 'react';
import FulfillmentApp from './components/FulfillmentApp';
import PaymentApp from './components/PaymentApp';

export default () => {
  return (
      <div className='h-[100vh] flex flex-col justify-between'>
        <header className='bg-white py-5 text-center border-1 border-b-1 border-gray-200'>HEADER</header>
        <section className='p-5 w-[80%] my-8 mx-auto h-full'>
          <FulfillmentApp />
          <PaymentApp />
        </section>
        <footer className='py-5 text-center border-1 border-b-1 border-gray-200'>FOOTER</footer>
      </div>
  );
};
