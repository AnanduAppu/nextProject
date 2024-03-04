import React, { useState } from 'react';

const PricingComponent = () => {
  const [annual, setAnnual] = useState(true);

  const toggleAnnual = () => {
    setAnnual(!annual);
  };

  return (
    <section className="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
      <div className="h-full">
        <div className="max-w-5xl mx-auto" x-data="{ annual: true }">
          <h2 className="text-3xl text-gray-800 font-bold text-center mb-4">Plans</h2>
          <div className="flex justify-center">
            <div className="flex items-center space-x-3 mb-8">
                
              <div className="text-sm text-gray-500 font-medium min-w-[120px] text-right">Monthly</div>
              <div className="relative select-none w-[44px]">
                <input
                  type="checkbox"
                  id="toggle"
                  className="peer sr-only"
                  onChange={toggleAnnual}
                  checked={annual}
                />
                <label
                  className={`block overflow-hidden cursor-pointer h-6 rounded-full ${
                    annual ? 'bg-gray-400 peer-checked:bg-indigo-500' : 'bg-indigo-500 peer-checked:bg-gray-400'
                  }`}
                  htmlFor="toggle"
                >
                  <span
                    className={`absolute block rounded-full w-5 h-5 top-0.5 left-0.5 right-1/2 bg-white shadow-sm transition-all duration-150 ease-out ${
                      annual ? 'bg-white' : 'bg-indigo-500'
                    }`}
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Pay annually</span>
                </label>
              </div>
              <div className="text-sm text-gray-500 font-medium min-w-[120px]">
                Annually <span className="text-green-500">(-20%)</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {/* Pricing tabs */}
            {/* Here you can add your pricing tabs */}
          </div>
        </div>
      </div>
      {/* More components */}
      <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60">
        <div className="bg-gray-800 text-gray-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
          <div>
            👉{' '}
            <a className="hover:underline ml-1" href="https://cruip.com/mosaic/?ref=codepen-cruip-pricing-tab" target="_blank">
              More components on Cruip.com
            </a>
          </div>
          <button className="text-gray-500 hover:text-gray-400 ml-5" onClick={() => setOpen(false)}>
            <span className="sr-only">Close</span>
            <svg className="w-4 h-4 flex-shrink-0 fill-current" viewBox="0 0 16 16">
              <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingComponent;