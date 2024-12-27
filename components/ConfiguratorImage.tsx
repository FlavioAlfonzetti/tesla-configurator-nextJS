import Image from "next/image";
import { exteriorImages, interiorImages } from "@/lib/constants";

type ExteriorColor = keyof typeof exteriorImages;
type InteriorColor = keyof typeof interiorImages;

type ConfiguratorImageProps = {
  color: ExteriorColor;
  hasPerformanceWheels: boolean;
  selectedInteriorColor: InteriorColor;
};

const ConfiguratorImage = ({
  color,
  hasPerformanceWheels,
  selectedInteriorColor,
}: ConfiguratorImageProps) => {
  const getExteriorImageSrc = () => {
    const performanceSuffix = hasPerformanceWheels ? "-performance" : "";
    return exteriorImages[color].replace(".jpg", `${performanceSuffix}.jpg`);
  };

  const getInteriorImageSrc = () => {
    return interiorImages[selectedInteriorColor];
  };

  return (
    <section className="w-full md:w-3/4">
      <div className="sticky top-24">
        {/* <!-- Exterior Image --> */}
        <div className="h-96 bg-gray-200 flex items-center justify-center overflow-hidden mb-4">
          <Image
            src={getExteriorImageSrc()}
            alt="Model Y"
            className="transform scale-125"
            id="exterior-image"
            width={1300}
            height={1300}
          />
        </div>

        {/* <!-- Interior Image --> */}
        <div className="h-96 bg-gray-200 flex items-center justify-center overflow-hidden mb-4">
          <Image
            src={getInteriorImageSrc()}
            alt="Model Y Interior"
            className="transform scale-125"
            id="interior-image"
            width={1300}
            height={1300}
          />
        </div>
      </div>
    </section>
  );
};

export type { ExteriorColor, InteriorColor };
export default ConfiguratorImage;
