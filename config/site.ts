import rocket from "@/public/images/rocket.png";
import chart from "@/public/images/chart.png";
import settings from "@/public/images/settings.png";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Teal - Technology Service",
  description: "Lorem ipsum lorem ipsum ipsum ipsum.",
  navItems: [
    {
      label: "Services",
      href: "/",
    },
    {
      label: "Who We Help",
      href: "#whohelp",
    },
    {
      label: "Knowledge Center",
      href: "/",
    },
    {
      label: "About",
      href: "/",
    },
  ],
  links: {},
  carditems: [
    {
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan molestie elit, ac mollis massa interdum ac. Aenean aliquam.",
      imageSource: rocket,
    },
    {
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan molestie elit, ac mollis massa interdum ac. Aenean aliquam.",
      imageSource: chart,
    },
    {
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan molestie elit, ac mollis massa interdum ac. Aenean aliquam.",
      imageSource: settings,
    },
  ],
};
