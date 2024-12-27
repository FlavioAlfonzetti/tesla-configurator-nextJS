import Image from "next/image";
import { ExteriorColor, InteriorColor } from "@/components/ConfiguratorImage";

type ColorSelectorProps = {
  selectedExteriorColor: ExteriorColor;
  selectedInteriorColor: InteriorColor;
  onExteriorColorChange: (color: ExteriorColor) => void;
  onInteriorColorChange: (color: InteriorColor) => void;
};

const ColorSelector = ({
  selectedExteriorColor,
  selectedInteriorColor,
  onExteriorColorChange,
  onInteriorColorChange,
}: ColorSelectorProps) => {
  const exteriorColors: ExteriorColor[] = [
    "Stealth Grey",
    "Pearl White",
    "Deep Blue Metallic",
    "Solid Black",
    "Ultra Red",
    "Quicksilver",
  ];
  const interiorColors: InteriorColor[] = ["Dark", "Light"];

  return (
    <>
      {/* Exterior Colors */}
      <div className="my-8" id="exterior-buttons">
        <h3 className="font-semibold mb-2">Exterior Color</h3>
        <div className="flex space-x-4">
          {exteriorColors.map((color) => (
            <button
              key={color}
              onClick={(e) => {
                const color = e.currentTarget.querySelector("img")?.alt;
                if (color) onExteriorColorChange(color as ExteriorColor);
              }}
              className={`${
                selectedExteriorColor === color ? "btn-selected" : ""
              } transition-transform duration-300 hover:scale-110`}
            >
              <Image
                src={`/images/button-${color
                  .toLowerCase()
                  .replace(/ /g, "-")}.avif`}
                alt={color}
                className="w-20"
                width={80}
                height={80}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Interior Colors */}
      <div>
        <h3 className="font-semibold mb-2">Interior Color</h3>
        <div className="flex space-x-4">
          {interiorColors.map((color) => (
            <button
              key={color}
              onClick={(e) => {
                const color = e.currentTarget.querySelector("img")?.alt;
                if (color) onInteriorColorChange(color as InteriorColor);
              }}
              className={`${
                selectedInteriorColor === color ? "btn-selected" : ""
              } transition-transform duration-300 hover:scale-110`}
            >
              <Image
                src={`/images/button-${color
                  .toLowerCase()
                  .replace(" ", "-")}.avif`}
                alt={color}
                className="w-12"
                width={48}
                height={48}
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ColorSelector;
