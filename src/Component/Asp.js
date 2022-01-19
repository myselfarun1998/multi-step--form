import React, { useState, useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import { RadioGroup } from '@mui/material';
import { Radio } from '@mui/material';
import { FormControlLabel, makeStyles } from '@mui/material';
import { FormLabel } from '@mui/material';
import { FormControl } from '@mui/material';
import { multiStepContext } from '../StepContext';

const Asp = () => {
  const [framework, setFramework] = useState(' game development ');
  const { setStep, userData, setUserData, submitData } =
    useContext(multiStepContext);
  return (
    <div>
      <label>refferal code</label>
      <br />
      <input
        type="text"
        value={userData['refferal']}
        onChange={(e) => setUserData({ ...userData, refferal: e.target.value })}
      />

      <div className="radio-btn-container">
        <div className="radio-btn">
          <label>Select ASP Your frameWork</label>
          <br />
          <input
            type="radio"
            name="framework"
            checked={userData.framework === ' .NET'}
            onChange={() =>
              setUserData((prev) => ({
                ...prev,
                framework: '.NET',
              }))
            }
          />
          .NET
        </div>

        <div className="radio-btn">
          <input
            type="radio"
            name="framework"
            checked={userData.framework === 'Mono'}
            onChange={() =>
              setUserData((prev) => ({ ...prev, framework: 'Mono' }))
            }
          />
          Mono
        </div>
        <div className="radio-btn">
          <input
            type="radio"
            name="framework"
            checked={userData.framework === ' Xamarin'}
            onChange={() =>
              setUserData((prev) => ({ ...prev, framework: 'Xamarin' }))
            }
          />
          Xamarin
        </div>
      </div>

      <div>
        <button
          variant="contained"
          onClick={() => setStep(2)}
          color="secondary"
        >
          Previous
        </button>{' '}
        <span></span>
        <button variant="contained" onClick={submitData} color="primary">
          Next
        </button>
      </div>
    </div>
  );
};

export default Asp;
