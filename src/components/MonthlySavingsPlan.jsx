import React, { useState } from 'react';
import '../Styles/MonthlySavingsPlan.css'

const MonthlySavingsPlan = () => {
  const [numExpenses, setNumExpenses] = useState(5);
  const [expenses, setExpenses] = useState([
    { name: 'Expense 1', originalAmount: 1000, strategy: 'Strategy', savingsPercentage: 10, newAmount: 900, monthlySavings: 100 },
  ]);

  const handleExpenseChange = (index, field, value) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index][field] = value;
    if (field === 'originalAmount' || field === 'savingsPercentage') {
      const newAmount = updatedExpenses[index].originalAmount * (1 - updatedExpenses[index].savingsPercentage / 100);
      updatedExpenses[index].newAmount = newAmount;
      updatedExpenses[index].monthlySavings = updatedExpenses[index].originalAmount - newAmount;
    }
    setExpenses(updatedExpenses);
  };

  const handleAddExpense = () => {
    setExpenses([...expenses, { name: `Expense ${expenses.length + 1}`, originalAmount: 1000, strategy: 'Strategy', savingsPercentage: 10, newAmount: 900, monthlySavings: 100 }]);
  };

  const handleRemoveExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  // Calculate totals
  const totalOriginalAmount = expenses.reduce((total, expense) => total + expense.originalAmount, 0);
  const totalNewAmount = expenses.reduce((total, expense) => total + expense.newAmount, 0);
  const totalMonthlySavings = expenses.reduce((total, expense) => total + expense.monthlySavings, 0);

  return (
    <div className="monthly-savings-plan">
      <h2>Monthly Savings Plan</h2>
      <div className="input-group">
        <label>Enter the number of different expenses you have:</label>
        <input type="number" value={numExpenses} onChange={(e) => setNumExpenses(Number(e.target.value))} min="1" step="1" />
        <button onClick={handleAddExpense}>Add Expense</button>
      </div>
      {expenses.map((expense, index) => (
        <div key={index} className="expense">
          <h3>{expense.name}</h3>
          <div className="input-group">
            <label>Expense Name:</label>
            <input type="text" value={expense.name} onChange={(e) => handleExpenseChange(index, 'name', e.target.value)} />
          </div>
          <div className="input-group">
            <label>Original Amount (Rs):</label>
            <input type="number" value={expense.originalAmount} onChange={(e) => handleExpenseChange(index, 'originalAmount', Number(e.target.value))} />
          </div>
          <div className="input-group">
            <label>Savings Strategy:</label>
            <input type="text" value={expense.strategy} onChange={(e) => handleExpenseChange(index, 'strategy', e.target.value)} />
          </div>
          <div className="input-group">
            <label>Savings Percentage (%):</label>
            <input type="number" value={expense.savingsPercentage} onChange={(e) => handleExpenseChange(index, 'savingsPercentage', Number(e.target.value))} min="0" max="100" />
          </div>
          <div className="result">
            <p>New Amount (Rs): {expense.newAmount}</p>
            <p>Monthly Savings (Rs): {expense.monthlySavings}</p>
          </div>
          <button onClick={() => handleRemoveExpense(index)}>Remove Expense</button>
        </div>
      ))}
      <h2>Monthly Savings Plan Table</h2>
      <table className="savings-plan-table">
        <thead>
          <tr>
            <th>Expense</th>
            <th>Original Amount (Rs)</th>
            <th>Savings Strategy</th>
            <th>New Amount (Rs)</th>
            <th>Monthly Savings (Rs)</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.name}</td>
              <td>{expense.originalAmount}</td>
              <td>{expense.strategy}</td>
              <td>{expense.newAmount}</td>
              <td>{expense.monthlySavings}</td>
            </tr>
          ))}
          <tr className="totals">
            <td><strong>Total:</strong></td>
            <td><strong>{totalOriginalAmount}</strong></td>
            <td></td>
            <td><strong>{totalNewAmount}</strong></td>
            <td><strong>{totalMonthlySavings}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MonthlySavingsPlan;