import { useState } from "react";

const Progress_Steps_CSS = () => {

 
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const handleNext = () => {
    setCurrentStep((prev) => (prev < totalSteps ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));
  };
  const progressWidth = Math.floor(
    ((currentStep - 1) / (totalSteps - 1)) * 100
  ) // get perecentage
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f6f7fb] font-sans">
      <div className="text-center">
        <div className="relative flex justify-between w-[350px] mb-8">
          {/* Background line (acts like ::before) */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-[#a92222] -z-20 transform -translate-y-1/2"></div>

          {/* Progress line */}
          <div
            className={`absolute w-[40%] top-1/2 left-0 h-1 bg-[#3498db] -z-1 transform -translate-y-1/2 transition-all duration-300 ease-in-out`}
          ></div>

          {/* Steps */}
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`w-8 h-8 flex items-center justify-center rounded-full border-[3px] transition-all duration-300 ${
                step <= currentStep
                  ? "border-[#3498db] text-[#3498db] bg-white"
                  : "border-[#e0e0e0] text-[#999] bg-white"
              }`}
            >
              {step}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div>
          <button
            onClick={handlePrev}
            disabled={currentStep === 1}
            className={`bg-[#3498db] text-white px-6 py-2 rounded-md text-sm font-medium m-1 transition-all active:scale-[0.98] disabled:bg-[#e0e0e0] disabled:cursor-not-allowed`}
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            disabled={currentStep === totalSteps}
            className={`bg-[#3498db] text-white px-6 py-2 rounded-md text-sm font-medium m-1 transition-all active:scale-[0.98] disabled:bg-[#e0e0e0] disabled:cursor-not-allowed`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Progress_Steps_CSS;
