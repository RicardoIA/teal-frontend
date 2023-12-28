import { siteConfig } from "@/config/site";
import GroupCard from "./card/group-card";

export default function SectionHelp() {
  const cardsData = siteConfig.carditems;

  return (
    <section
      id="whohelp"
      className="flex flex-col items-start justify-start gap-4 mt-4 mb-10 h-3/4 md:py-10"
    >
      <div className="flex flex-col sm:flex-row justify-evenly w-full gap-5 py-4 sm:py-8 rounded-lg bg-primary/20 border-blue-600 border-1">
        {cardsData.map((item, index) => (
          <GroupCard
            key={index}
            title={item.title}
            description={item.description}
            imageSource={item.imageSource}
          />
        ))}
      </div>
    </section>
  );
}
