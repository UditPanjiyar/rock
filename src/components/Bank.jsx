import React from "react";
import { Link } from "react-router-dom";
import sbi from "./Bank_Logo/sbi.png";
import hdfc from "./Bank_Logo/hdfc.png"
import pnb from "./Bank_Logo/pnb.png"
import cbi from "./Bank_Logo/cbi.png"
import canara from "./Bank_Logo/canara.png"
import Bob from "./Bank_Logo/Bob.png"
import Boi from "./Bank_Logo/Boi.png"
import Axis from "./Bank_Logo/axis.png"
import Kotak from "./Bank_Logo/kotak.jpg"


const Bank = () => {
  return (
    <div className=" flex flex-wrap justify-center items-center w-screen h-[100%] bg-gray-900">


<div className="bg-[#0A5A72] m-4   p-6 rounded-lg shadow-lg w-full sm:w-1/4 flex flex-col justify-center items-center">
        <div className="text-center ">
          <div className="w-16 h-16 mb-4">
            <img className="rounded-full" src={Boi} alt="BOI" />
          </div>
          <h2 className="text-2xl text-yellow-200 font-bold mb-2">Interest Rate (p.a.)</h2>
          <p className="mb-4 text-white ">11.05% p.a. to 11.85% p.a.</p>
          <h2 className="text-2xl text-yellow-200 font-bold mb-2">Processing Fees</h2>
          <p className="mb-4 text-white">
            No processing fee for studies in India
          </p>
          <a href="https://bankofindia.co.in/education-loan" target="_blank" rel="noopener noreferrer">
            <button className="mt-4 px-4 py-2 bg-yellow-400 text-blue-900 font-bold rounded hover:bg-yellow-500">
              Apply Loan
            </button>
          </a>
        </div>
      </div>

      <div className="bg-[#0A5A72] m-4 p-6 rounded-lg shadow-lg w-full sm:w-1/4 flex flex-col justify-center items-center">
        <div className="text-center">
          <div className="w-16 h-16 mb-4">
            <img className="rounded-full" src={Axis} alt="Axis" />
          </div>
          <h2 className="text-2xl text-yellow-200 font-bold mb-2">Interest Rate (p.a.)</h2>
          <p className="mb-4 text-white">13.70% p.a. to 15.20% p.a.</p>
          <h2 className="text-2xl text-yellow-200 font-bold mb-2">Processing Fees</h2>
          <p className="mb-4 text-white">
            2.00% of the loan plus GST
          </p>
          <a href="https://www.axisbank.com/retail/loans/education-loan" target="_blank" rel="noopener noreferrer">
            <button className="mt-4 px-4 py-2 bg-yellow-400 text-blue-900 font-bold rounded hover:bg-yellow-500">
              Apply Loan
            </button>
          </a>
        </div>
      </div>

      <div className="bg-[#0A5A72] m-4 p-6 rounded-lg shadow-lg w-full sm:w-1/4 flex flex-col justify-center items-center">
        <div className="text-center">
          <div className="w-16 h-16 mb-4">
            <img className="rounded-full" src={Kotak} alt="Kotak" />
          </div>
          <h2 className="text-2xl text-yellow-200 font-bold mb-2">Interest Rate (p.a.)</h2>
          <p className="mb-4 text-white">Up to 16% p.a.</p>
          <h2 className="text-2xl text-yellow-200 font-bold mb-2">Processing Fees</h2>
          <p className="mb-4 text-white">Nil</p>
          <a href="https://www.kotak.com/en/personal-banking/loans/education-loan.html" target="_blank" rel="noopener noreferrer">
            <button className="mt-4 px-4 py-2 bg-yellow-400 text-blue-900 font-bold rounded hover:bg-yellow-500">
              Apply Loan
            </button>
          </a>
        </div>
      </div>   

      <div className="bg-[#0A5A72] m-4 p-6 rounded-lg shadow-lg w-full sm:w-1/4 flex flex-col justify-center items-center">
        <div className="text-center">
          <div className="w-16 h-16 mb-4">
            <img className="rounded-full" src={sbi} alt="SBI" />
          </div>
          <h2 className="text-2xl text-yellow-200 font-bold mb-2">Interest Rate (p.a.)</h2>
          <p className="mb-4 text-white">8.15% p.a. to 11.75% p.a.</p>
          <h2 className="text-2xl text-yellow-200 font-bold mb-2">Processing Fees</h2>
          <p className="mb-4 text-white">
            Up to Rs.10,000 <br /> No charges required for loan amount below Rs.20 lakh<br />
            Loan amount above Rs.20 lakh: Rs.10,000 (plus taxes)
          </p>
          <a href="https://sbi.co.in/web/personal-banking/loans/education-loans" target="_blank" rel="noopener noreferrer">
            <button className="mt-4 px-4 py-2 bg-yellow-400 text-blue-900 font-bold rounded hover:bg-yellow-500">
              Apply Loan
            </button>
          </a>
        </div>
      </div>



      <div className="bg-[#0A5A72] m-4 p-6 rounded-lg shadow-lg w-full sm:w-1/4 flex flex-col justify-center items-center">
        <div className="text-center">
          <div className="w-16 h-16 mb-4">
            <img className="rounded-full" src={canara} alt="Canara" />
          </div>
          <h2 className="text-2xl text-yellow-200 font-bold mb-2">Interest Rate (p.a.)</h2>
          <p className="mb-4 text-white">9.25% p.a. onwards</p>
          <h2 className="text-2xl text-yellow-200 font-bold mb-2">Processing Fees</h2>
          <p className="mb-4 text-white">
            0.50% of the loan amount up to Rs.10,000 (for collateral security coverage of 100% and above) <br /> 
            0.50% of the loan amount up to Rs. 20,000 (for collateral security coverage of less than 100%)
          </p>
          <a href="https://canarabank.com/iba-model-education-loan-scheme" target="_blank" rel="noopener noreferrer">
            <button className="mt-4 px-4 py-2 bg-yellow-400 text-blue-900 font-bold rounded hover:bg-yellow-500">
              Apply Loan
            </button>
          </a>
        </div>
      </div>

      <div className="bg-[#0A5A72] m-4 p-6 rounded-lg shadow-lg w-full sm:w-1/4 flex flex-col justify-center items-center">
        <div className="text-center">
          <div className="w-16 h-16 mb-4">
            <img className="rounded-full" src={Bob} alt="BOB" />
          </div>
          <h2 className="text-2xl text-yellow-200 font-bold mb-2">Interest Rate (p.a.)</h2>
          <p className="mb-4 text-white ">8.15% p.a. onwards</p>
          <h2 className="text-2xl text-yellow-200 font-bold mb-2">Processing Fees</h2>
          <p className="mb-4 text-white">
            No processing for charges up to Rs.7.50 lakh<br/>
            1% of loan amount up to Rs.10,000 for charges above Rs. 7.50 lakh
          </p>
          <a href="https://www.bankofbaroda.in/personal-banking/loans/education-loan" target="_blank" rel="noopener noreferrer">
            <button className="mt-4 px-4 py-2 bg-yellow-400 text-blue-900 font-bold rounded hover:bg-yellow-500">
              Apply Loan
            </button>
          </a>
        </div>
      </div>
     

      <div className="bg-[#0A5A72] m-4 p-6 rounded-lg shadow-lg w-full sm:w-1/4 flex flex-col justify-center items-center">
        <div className="text-center">
          <div className="w-16 h-16 mb-4">
            <img className="rounded-full" src={cbi} alt="CBI" />
          </div>
          <h2 className="text-2xl text-yellow-200 font-bold mb-2">Interest Rate (p.a.)</h2>
          <p className="mb-4 text-white">8.10% p.a. to 10.60% p.a.</p>
          <h2 className="text-2xl text-yellow-200 font-bold mb-2">Processing Fees</h2>
          <p className="mb-4 text-white">
           Nil for studies in India <br /> 
           1% of loan amount for studies abroad (Max: Rs. 10,000) 
          </p>
          <a href="https://www.centralbankofindia.co.in/en/cent-education-loans" target="_blank" rel="noopener noreferrer">
            <button className="mt-4 px-4 py-2 bg-yellow-400 text-blue-900 font-bold rounded hover:bg-yellow-500">
              Apply Loan
            </button>
          </a>
        </div>
      </div>


      <div className="bg-[#0A5A72] m-4 p-6 rounded-lg shadow-lg w-full sm:w-1/4 flex flex-col justify-center items-center">
        <div className="text-center">
          <div className="w-16 h-16 mb-4">
            <img className="rounded-full" src={hdfc} alt="HDFC" />
          </div>
          <h2 className="text-2xl text-yellow-200 font-bold mb-2">Interest Rate (p.a.)</h2>
          <p className="mb-4 text-white">9.50% p.a.</p>
          <h2 className="text-2xl text-yellow-200 font-bold mb-2">Processing Fees</h2>
          <p className="mb-4 text-white">
            Maximum up to 1% of the loan amount
          </p>
          <a href="https://www.hdfcbank.com/personal/borrow/popular-loans/educational-loan/educational-loan-for-indian-education" target="_blank" rel="noopener noreferrer">
            <button className="mt-4 px-4 py-2 bg-yellow-400 text-blue-900 font-bold rounded hover:bg-yellow-500">
              Apply Loan
            </button>
          </a>
        </div>
      </div>

     

   
      <div className="bg-[#0A5A72] m-4 p-6 rounded-lg shadow-lg w-full sm:w-1/4 flex flex-col justify-center items-center">
        <div className="text-center">
          <div className="w-16 h-16 mb-4">
            <img className="rounded-full" src={pnb} alt="PNB" />
          </div>
          <h2 className="text-2xl text-yellow-200 font-bold mb-2">Interest Rate (p.a.)</h2>
          <p className="mb-4 text-white">9.20% p.a. onwards</p>
          <h2 className="text-2xl text-yellow-200 font-bold mb-2">Processing Fees</h2>
          <p className="mb-4 text-white">
           Nil for studies in India <br />
           1% of loan amount for studies abroad (Max: Rs. 10,000) 
          </p>
          <a href="https://www.pnbindia.in/education.html" target="_blank" rel="noopener noreferrer">
            <button className="mt-4 px-4 py-2 bg-yellow-400 text-blue-900 font-bold rounded hover:bg-yellow-500">
              Apply Loan
            </button>
          </a>
        </div>
      </div>

    

      
    </div>
  );
};

export default Bank;
