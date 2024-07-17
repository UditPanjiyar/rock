import React, { useState } from 'react';
import '../Styles/Scholarship.css';
import scholarships from '../utils/scholarship';

const Scholarship = () => {
  const [income, setIncome] = useState('');
  const [category, setCategory] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [scholarshipInfo, setScholarshipInfo] = useState([]);
  const tempCategories = scholarships.map((item) => {
    return item.category;
  })
  let categories = new Set(tempCategories);
  categories = Array.from(categories);



  const handleIncomeChange = (e) => setIncome(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);

  const findAll = (array, category) => {
    const results = [];
    for (const item of array) {
        if (item.category == category) {
            results.push(item);
        }
    }
    return results;
};

  const handleSubmit = (e) => {
    e.preventDefault();

    // find by category
    const selectedScholarships = findAll(scholarships, category);
    console.log(selectedScholarships);

    // filter by income
    if (selectedScholarships && income) {
      const filteredScholarship = selectedScholarships.filter((selectedScholarships) => {
        return selectedScholarships.fee_limit >= income;
      })
      setScholarshipInfo(filteredScholarship);
    } else {
      setScholarshipInfo(null);
    }
    setSubmitted(true);

    console.log("Submitted")
  };

  return (
    <div className="container bg-slate-50">
      <h1 className="title font-bold text-2xl">Scholarship Finder</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="income">Income: </label>
          <input
            type="number"
            id="income"
            value={income}
            onChange={handleIncomeChange}
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category: </label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            className="select"
          >
            <option value="" disabled>Select Category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>

      
      {submitted && (
        scholarshipInfo.length != 0 ? (

          // #############################
          <div className="scholarship-info">
            {scholarshipInfo.map((individualScholarship) => (
              <div key={individualScholarship.id}>

                {/* <div className='font-bold bg-green-700 text-red-800'>hi</div> */}
                <h2 className='font-bold text-xl'>{individualScholarship.scheme_name}</h2>
                <p><strong>Criteria:</strong></p>
                <ul>
                  {individualScholarship.criteria.map((criterion, index) => (
                    <li key={index}>{criterion}</li>
                  ))}
                </ul>
                <p><strong>Benefits:</strong> {Array.isArray(individualScholarship.benefits) ? individualScholarship.benefits.join(', ') : scholarshipInfo.benefits}</p>
              </div>
            ) )}

          </div>
          // #############################

        ) : (
          <p className="message">No scholarships found for the given income and category.</p>
        )
      )}
    </div>
  );
};

export default Scholarship;
