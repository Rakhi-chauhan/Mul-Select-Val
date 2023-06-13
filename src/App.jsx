
import './App.css';
import React, { useState } from 'react';
import MultiSelect from 'multiselect-react-dropdown'





const App = ({ value, readonly }) => {

  const [selectedValues, setSelectedValues] = useState(value || []);

  const handleCheckboxChange = (event) => {
    const { value: checkboxValue, checked } = event.target;

    if (checked) {
      setSelectedValues([...selectedValues, checkboxValue]);
    } else {
      setSelectedValues(selectedValues.filter((val) => val !== checkboxValue));
    }
  };

  <MultiSelect value={['val1', 'val2',]} readonly={false} />


  return (
    <div className='mul'>
      <div className='multiselect-container'>
        <h3>MultiSelect</h3>
        <div className='.checkbox-container'>
          <label >
            <input
              type="checkbox"
              checked={selectedValues.includes('val1')}
              value="val1"
              onChange={handleCheckboxChange}
              disabled={readonly}
            />
            Australia
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={selectedValues.includes('val2')}
              value="val2"
              onChange={handleCheckboxChange}
              disabled={readonly}
            />
            Bermuda
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={selectedValues.includes('val3')}
              value="val3"
              onChange={handleCheckboxChange}
              disabled={readonly}
            />
            Canada
          </label>

          <div>
            <label>
              <input
                type="checkbox"
                checked={selectedValues.includes('val4')}
                value="val4"
                onChange={handleCheckboxChange}
                disabled={readonly}
              />
              Camermon
            </label>
          </div>
          <div>
            <label>

              <input
                type="checkbox"
                checked={selectedValues.includes('val5')}
                value="val5"
                onChange={handleCheckboxChange}
                disabled={readonly}
              />
              Denmark
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={selectedValues.includes('val6')}
                value="val6"
                onChange={handleCheckboxChange}
                disabled={readonly}
              />
              France
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={selectedValues.includes('val7')}
                value="val7"
                onChange={handleCheckboxChange}
                disabled={readonly}
              />
              Finland
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={selectedValues.includes('val8')}
                value="val8"
                onChange={handleCheckboxChange}
                disabled={readonly}
              />
              Germany
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
