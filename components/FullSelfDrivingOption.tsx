type FullSelfDrivingOptionProps = {
  hasFullSelfDriving: boolean;
  onFullSelfDrivingChange: (hasFullSelfDriving: boolean) => void;
};

const FullSelfDriving = ({
  hasFullSelfDriving,
  onFullSelfDrivingChange,
}: FullSelfDrivingOptionProps) => {
  return (
    <div className="border p-4 mb-8 rounded-lg shadow">
      <h3 className="font-semibold mb-2">Full Self-Driving</h3>
      <label className="flex items-center space-x-3">
        <input
          type="checkbox"
          id="full-self-driving-checkbox"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={hasFullSelfDriving}
          onChange={() => onFullSelfDrivingChange(!hasFullSelfDriving)} // "!" means the opposite of the current value
        />
        <span>Add Full Self-Driving for €8.500</span>
      </label>
    </div>
  );
};

export default FullSelfDriving;
