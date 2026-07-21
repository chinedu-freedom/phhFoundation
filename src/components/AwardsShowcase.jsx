"use client";

import Image from "next/image";

export const AWARDS_DATA = [
  {
    id: "garki-chiefdom-award",
    title: "Garki Chiefdom Council Traditional Title & Merit Award",
    issuingBody: "The Garki Chiefdom Council AMAC, Abuja",
    description: "Conferment of prestigious traditional chieftaincy title and Merit Award by The Garki Chiefdom Council AMAC, honoring outstanding community empowerment and educational interventions.",
    image: "/reward3.jpeg",
  },
  {
    id: "abu-zaria-award",
    title: "ABU Zaria Postgraduate Council Leadership Award",
    issuingBody: "Ahmadu Bello University Postgraduate Representative Council",
    description: "Leadership Award presented by the Postgraduate Representative Council of Ahmadu Bello University Zaria for pioneering tertiary education scholarship schemes.",
    image: "/reward7.jpeg",
  },
  {
    id: "iomp-membership",
    title: "International Organization of Management Professionals Induction",
    issuingBody: "International Organization of Management Professionals (IOMP)",
    description: "Official professional membership induction and plaque presentation by IOMP for excellence in administrative non-profit governance.",
    image: "/reward10.jpeg",
  },
  {
    id: "ministry-of-labour-award",
    title: "Ministry of Labour Great Silent Achiever Award",
    issuingBody: "Federal Ministry of Labour and Employment",
    description: "Prestigious 'Great Silent Achiever Award' presented by the Ministry of Labour recognizing quiet, impactful grassroot community development.",
    image: "/reward.jpeg",
  },
  {
    id: "honorary-recognition-award",
    title: "Honorary Award of Recognition",
    issuingBody: "Community Youth Development Council",
    description: "Honorary award presentation recognizing unreserved dedication to youth empowerment, skill bootcamps, and micro-grant provisions.",
    image: "/reward1.jpeg",
  },
  {
    id: "hall-of-fame-award",
    title: "Humanitarian Hall of Fame Induction",
    issuingBody: "National Humanitarian Alliance",
    description: "Commemorative Hall of Fame honor awarded for sustained community outreach, scholarship funding, and emergency relief distribution.",
    image: "/hall%20of%20fame.jpeg",
  }
];

export default function AwardsShowcase() {
  return (
    <div className="w-full">
      {/* Static Award Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {AWARDS_DATA.map((award) => (
          <div
            key={award.id}
            className="group relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between"
          >
            <div className="relative aspect-[4/3] w-full bg-zinc-950 overflow-hidden p-2">
              <Image
                src={award.image}
                alt={award.title}
                fill
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6 flex flex-col flex-1 justify-between bg-white dark:bg-zinc-900">
              <div className="space-y-2">
                <span className="block text-xxs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                  {award.issuingBody}
                </span>
                <h4 className="text-base font-bold text-zinc-900 dark:text-white font-poppins leading-snug min-h-[3rem] flex items-center">
                  {award.title}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
                  {award.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
