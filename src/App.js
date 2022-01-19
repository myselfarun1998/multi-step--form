import React from 'react';
import FirstStep from './Component/FirstStep';
import SecondStep from './Component/SecondStep';
import ThirdStep from './Component/ThirdStep';
import { Stepper, StepLabel, Step } from '@material-ui/core';
import { multiStepContext } from './StepContext';
import { useContext } from 'react';
import DisplayData from './Component/DisplayData';
import java from './Component/Java';
import Asp from './Component/Asp';
import c from './Component/c';

function App() {
  const { currentStep, finalData } = useContext(multiStepContext);

  function showStep(step) {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
      case 4:
        return <java />;
      case 5:
        return <c />;
      case 6:
        return <Asp />;
    }
  }

  return (
    <div className="App">
      <h1>Multi form task</h1>
      <div className="App-header">
        <div className="center-stepper">
          <Stepper
            style={{ width: '18%' }}
            activeStep={currentStep - 1}
            orientation="horizontal "
          >
            <Step>
              <StepLabel> </StepLabel>
            </Step>
            <Step>
              <StepLabel> </StepLabel>
            </Step>
            <Step>
              <StepLabel> </StepLabel>
            </Step>
            <Step>
              <StepLabel> </StepLabel>
            </Step>
            <Step>
              <StepLabel> </StepLabel>
            </Step>
            <Step>
              <StepLabel> </StepLabel>
            </Step>
          </Stepper>
        </div>
        {showStep(currentStep)}
        <DisplayData />
      </div>
    </div>
  );
}

export default App;
