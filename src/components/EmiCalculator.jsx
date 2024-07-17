import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTenure, setLoanTenure] = useState(5);
  const [emiDetails, setEmiDetails] = useState({
    emi: 0,
    principal: 0,
    interest: 0,
    total: 0,
  });

  const chartRef = useRef(null);

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTenure]);

  const updateLoanAmount = (value) => {
    setLoanAmount(parseInt(value));
  };

  const updateInterestRate = (value) => {
    setInterestRate(parseFloat(value));
  };

  const updateLoanTenure = (value) => {
    setLoanTenure(parseInt(value));
  };

  const calculateEMI = () => {
    const monthlyRate = interestRate / 12 / 100;
    const months = loanTenure * 12;
    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    const totalAmount = emi * months;
    const totalInterest = totalAmount - loanAmount;

    setEmiDetails({
      emi: emi.toFixed(2),
      principal: loanAmount.toFixed(2),
      interest: totalInterest.toFixed(2),
      total: totalAmount.toFixed(2),
    });

    const ctx = document.getElementById('emiChart').getContext('2d');

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Principal amount', 'Interest amount'],
        datasets: [
          {
            data: [loanAmount, totalInterest],
            backgroundColor: ['#36A2EB', '#FF6384'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'EMI Breakdown',
          },
        },
      },
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#9E9E9E]">
      <div className="flex bg-white p-8 rounded-lg shadow-md">
        <div className="text-center mr-8">
          <h2 className="mb-6 text-2xl font-semibold">EMI Calculator</h2>
          <form id="emiForm" className="flex flex-col">
            <div className="mb-6 text-left">
              <label htmlFor="loanAmount" className="block mb-2">Loan amount:</label>
              <input
                type="range"
                id="loanAmount"
                min="100000"
                max="10000000"
                step="50000"
                value={loanAmount}
                onInput={(e) => updateLoanAmount(e.target.value)}
                className="w-full"
              />
              <span id="loanAmountValue" className="block mt-2">₹ {loanAmount.toLocaleString()}</span>
            </div>

            <div className="mb-6 text-left">
              <label htmlFor="interestRate" className="block mb-2">Rate of interest (p.a):</label>
              <input
                type="range"
                id="interestRate"
                min="1"
                max="15"
                step="0.1"
                value={interestRate}
                onInput={(e) => updateInterestRate(e.target.value)}
                className="w-full"
              />
              <span id="interestRateValue" className="block mt-2">{interestRate}%</span>
            </div>

            <div className="mb-6 text-left">
              <label htmlFor="loanTenure" className="block mb-2">Loan tenure (years):</label>
              <input
                type="range"
                id="loanTenure"
                min="1"
                max="30"
                step="1"
                value={loanTenure}
                onInput={(e) => updateLoanTenure(e.target.value)}
                className="w-full"
              />
              <span id="loanTenureValue" className="block mt-2">{loanTenure} Yr</span>
            </div>

            <button
              type="button"
              onClick={calculateEMI}
              className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Calculate EMI
            </button>
          </form>

          <div id="result" className={`mt-6 ${emiDetails.emi ? 'block' : 'hidden'}`}>
            <h3>Monthly EMI: <span id="emiAmount" className="font-bold text-blue-500">₹ {emiDetails.emi}</span></h3>
            <h3>Principal amount: <span id="principalAmount" className="font-bold text-blue-500">₹ {emiDetails.principal}</span></h3>
            <h3>Total interest: <span id="totalInterest" className="font-bold text-blue-500">₹ {emiDetails.interest}</span></h3>
            <h3>Total amount: <span id="totalAmount" className="font-bold text-blue-500">₹ {emiDetails.total}</span></h3>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <canvas id="emiChart" className="max-w-xs max-h-xs"></canvas>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
