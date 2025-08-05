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
    <div className="w-72 h-96 perspective">
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
          <div className="absolute bottom-4 left-4 text-white z-10">
            <p className="font-bold text-lg">{headline}</p>
            <p className="text-sm">{subtext}</p>
          </div>
          <button
            className="absolute top-3 right-3 bg-black/70 text-white px-3 py-2 rounded-full z-10 hover:bg-black transition flex items-center gap-2 text-sm"
            onClick={(e) => {
              e.stopPropagation();
              setFlipped(true);
            }}
          >
            <RotateCw size={16} />
            Turn Over For Details
          </button>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl shadow-lg p-4 flex flex-col">
          <div className="overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <h3 className="text-lg font-semibold mb-2">{headline}</h3>
            <div className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {details}
            </div>
          </div>
          <button
            onClick={() => setFlipped(false)}
            className="mt-4 bg-black/70 text-white px-3 py-2 rounded-full hover:bg-black transition flex items-center gap-2 self-end text-sm"
          ><RotateCw size={18} className="transform rotate-180" />
            Go to Code 
          </button>

        </div>
      </div>
    </div>
  );
};
