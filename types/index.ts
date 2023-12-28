import { StaticImageData } from "next/image";
import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type GroupCardProps = {
  title?: string;
  description?: string;
  imageSource: string | StaticImageData;
};
