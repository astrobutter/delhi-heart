"use client";
import { useState } from "react";
import clsx from "clsx";
import { RotateCw } from "lucide-react";

export const OfferCard = ({
  image,
  headline,
  subtext,
  details,
}: {
  image: string;
  headline: string;
  subtext: string;
  details: string;
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-full max-w-sm h-[380px] sm:h-[420px] perspective cursor-pointer"
      onClick={() => setFlipped((prev) => !prev)}
    >
      <div
        className={clsx(
          "relative w-full h-full transition-transform duration-700 transform-style preserve-3d",
          flipped && "rotate-y-180"
        )}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg">
          <img
            src={image}
            alt={headline}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 text-white z-10 bg-black/75 px-3 py-2 rounded-md max-w-[90%]">
            <p className="font-bold text-lg">{headline}</p>
            <p className="text-sm">{subtext}</p>
          </div>
          <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-2 rounded-full z-10 text-xs flex items-center gap-1 pointer-events-none">
            <RotateCw size={14} />
            Tap Card for Details
          </div>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl shadow-lg p-4 flex flex-col justify-between">
          <div className="overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 pr-1">
            <h3 className="text-lg font-semibold mb-2">{headline}</h3>
            <div className="text-justify text-sm text-gray-700 whitespace-pre-line">
              {details}
            </div>
          </div>

          <div className="mt-4 bg-black/70 text-white px-3 py-2 rounded-full text-xs flex items-center gap-2 self-end pointer-events-none">
            <RotateCw size={14} className="transform rotate-180" />
            Tap Again to Flip
          </div>
        </div>
      </div>
    </div>
  );
};
