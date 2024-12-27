type PerformanceUpgradeProps = {
  hasPerformanceUpgrade: boolean;
  onPerformanceUpgradeChange: (hasPerformanceUpgrade: boolean) => void;
};

const PerformanceUpgrade = ({
  hasPerformanceUpgrade,
  onPerformanceUpgradeChange,
}: PerformanceUpgradeProps) => {
  return (
    <div className="mb-8">
      <h3 className="font-semibold mb-2">Performance Package</h3>
      <button
        className={`w-full py-4 ${
          hasPerformanceUpgrade ? "bg-gray-700 text-white" : ""
        } bg-gray-200 hover:bg-gray-400 rounded-lg`}
        id="performance-btn"
        onClick={() => onPerformanceUpgradeChange(!hasPerformanceUpgrade)}
      >
        Performance Upgrade (+€5.000)
      </button>
    </div>
  );
};

export default PerformanceUpgrade;
