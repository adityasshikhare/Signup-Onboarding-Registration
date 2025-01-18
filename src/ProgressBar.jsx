import './progress-bar.css';

const ProgressBar = ({ currentStep, totalSteps }) => {
    const progress = (currentStep / totalSteps) * 100;
  
    return (
      <div>
      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Step Labels */}
      <div className="step-labels">
        {[...Array(totalSteps).keys()].map((step) => (
          <span
            key={step}
            className={`step-label ${
              currentStep === step + 1 ? 'active' : ''
            }`}
          >
            Step {step + 1}
          </span>
        ))}
      </div>
    </div>
    );
  };
  
  export default ProgressBar;
  