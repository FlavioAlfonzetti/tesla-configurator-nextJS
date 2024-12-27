type AccessoriesProps = {
  selectedAccessories: {
    "Center Console Trays": boolean;
    Sunshade: boolean;
    "All-Weather Interior Liners": boolean;
  };
  onAccessoryChange: (accessory: string, isSelected: boolean) => void;
};

const Accessories = ({
  selectedAccessories,
  onAccessoryChange,
}: AccessoriesProps) => {
  return (
    <div className="my-8">
      <h3 className="font-semibold mb-2">Accessories</h3>
      <div className="space-y-4">
        <label className="flex items-center justify-between py-4 px-4 border rounded-lg shadow">
          <span>Center Console Trays</span>
          <span className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="accessory-form-checkbox h-5 w-5"
              checked={selectedAccessories["Center Console Trays"]}
              onChange={() =>
                onAccessoryChange(
                  "Center Console Trays",
                  !selectedAccessories["Center Console Trays"]
                )
              }
            />
            <span>€35</span>
          </span>
        </label>
        <label className="flex items-center justify-between py-4 px-4 border rounded-lg shadow">
          <span>Sunshade</span>
          <span className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="accessory-form-checkbox h-5 w-5"
              checked={selectedAccessories.Sunshade}
              onChange={() =>
                onAccessoryChange("Sunshade", !selectedAccessories.Sunshade)
              }
            />
            <span>€105</span>
          </span>
        </label>
        <label className="flex items-center justify-between py-4 px-4 border rounded-lg shadow">
          <span>All-Weather Interior Liners</span>
          <span className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="accessory-form-checkbox h-5 w-5"
              checked={selectedAccessories["All-Weather Interior Liners"]}
              onChange={() =>
                onAccessoryChange(
                  "All-Weather Interior Liners",
                  !selectedAccessories["All-Weather Interior Liners"]
                )
              }
            />
            <span>€225</span>
          </span>
        </label>
      </div>
    </div>
  );
};

export default Accessories;
