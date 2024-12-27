type WheelSelectorProps = {
  hasPerformanceWheels: boolean;
  onWheelChange: (hasPerformance: boolean) => void;
};

const WheelSelector = ({
  hasPerformanceWheels,
  onWheelChange,
}: WheelSelectorProps) => {
  return (
    <div className="mb-8" id="wheel-buttons">
      <h3 className="font-semibold mb-2">Wheels</h3>
      <button
        className={`w-full py-4 mb-2 ${
          !hasPerformanceWheels ? "bg-gray-700 text-white" : ""
        } hover:bg-gray-600 hover:text-white rounded-lg transition-colors duration-300`}
        onClick={() => onWheelChange(false)}
      >
        Standard Wheels
      </button>
      <button
        className={`w-full py-4 mb-2 ${
          !hasPerformanceWheels ? "bg-gray-200 " : "bg-gray-700 text-white"
        }  hover:bg-gray-600 hover:text-white rounded-lg transition-colors duration-300`}
        onClick={() => onWheelChange(true)}
      >
        Performance Wheels (+€2.500)
      </button>
    </div>
  );
};

export default WheelSelector;
