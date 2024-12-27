"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import ConfiguratorImage, {
  ExteriorColor,
  InteriorColor,
} from "@/components/ConfiguratorImage";
import ColorSelector from "@/components/ColorSelector";
import WheelSelector from "@/components/WheelSelector";
import PerformanceUpgrade from "@/components/PerformanceUpgrade";
import Accessories from "@/components/Accessories";
import PriceSection from "@/components/PriceSection";
import PaymentBreakdown from "@/components/PaymentBreakdown";
import FullSelfDriving from "@/components/FullSelfDrivingOption";
import { BASE_PRICE, PRICING } from "@/lib/constants";

const Home = () => {
  const [selectedExteriorColor, setSelectedExteriorColor] =
    useState<ExteriorColor>("Stealth Grey");
  const [selectedInteriorColor, setSelectedInteriorColor] =
    useState<InteriorColor>("Dark");
  const [selectedOptions, setSelectedOptions] = useState({
    "Performance Wheels": false,
    "Performance Package": false,
    "Full Self-Driving": false,
  });
  const [selectedAccessories, setSelectedAccessories] = useState({
    "Center Console Trays": false,
    Sunshade: false,
    "All-Weather Interior Liners": false,
  });
  const calculateTotalPrice = () => {
    let total = BASE_PRICE;

    if (selectedOptions["Performance Wheels"]) {
      total += PRICING["Performance Wheels"];
    }
    if (selectedOptions["Performance Package"]) {
      total += PRICING["Performance Package"];
    }
    if (selectedOptions["Full Self-Driving"]) {
      total += PRICING["Full Self-Driving"];
    }

    if (selectedAccessories["Center Console Trays"]) {
      total += PRICING.Accessories["Center Console Trays"];
    }
    if (selectedAccessories["Sunshade"]) {
      total += PRICING.Accessories["Sunshade"];
    }
    if (selectedAccessories["All-Weather Interior Liners"]) {
      total += PRICING.Accessories["All-Weather Interior Liners"];
    }

    return total;
  };

  const totalPrice = calculateTotalPrice();

  return (
    <>
      <TopBar />
      <Header />
      <main className="flex flex-col md:flex-row justify-between px-4 md:px-10 py-6">
        <ConfiguratorImage
          color={selectedExteriorColor}
          hasPerformanceWheels={selectedOptions["Performance Wheels"]}
          selectedInteriorColor={selectedInteriorColor}
        />
        <aside className="w-full md:w-1/3 pl-0 md:pl-8 mt-6 md:mt-0">
          <h1 className="text-5xl text-center font-bold mb-5">Model Y</h1>
          <h2 className="text-xl text-center font-light">Customize Your Car</h2>
          <ColorSelector
            selectedExteriorColor={selectedExteriorColor}
            selectedInteriorColor={selectedInteriorColor}
            onExteriorColorChange={setSelectedExteriorColor}
            onInteriorColorChange={setSelectedInteriorColor}
          />
          <WheelSelector
            hasPerformanceWheels={selectedOptions["Performance Wheels"]}
            onWheelChange={(hasPerformance) =>
              setSelectedOptions({
                ...selectedOptions,
                "Performance Wheels": hasPerformance,
              })
            }
          />
          <FullSelfDriving
            hasFullSelfDriving={selectedOptions["Full Self-Driving"]}
            onFullSelfDrivingChange={(hasFullSelfDriving) =>
              setSelectedOptions({
                ...selectedOptions,
                "Full Self-Driving": hasFullSelfDriving,
              })
            }
          />
          <PerformanceUpgrade
            hasPerformanceUpgrade={selectedOptions["Performance Package"]}
            onPerformanceUpgradeChange={(hasPerformanceUpgrade) => {
              setSelectedOptions({
                ...selectedOptions,
                "Performance Package": hasPerformanceUpgrade,
              });
            }}
          />
          <Accessories
            selectedAccessories={selectedAccessories}
            onAccessoryChange={(accessory, isSelected) => {
              setSelectedAccessories({
                ...selectedAccessories,
                [accessory]: isSelected,
              });
            }}
          />
          <PriceSection totalPrice={totalPrice} />
          <PaymentBreakdown totalPrice={totalPrice} />
        </aside>
      </main>
    </>
  );
};

export default Home;
