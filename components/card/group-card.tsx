import { GroupCardProps } from "@/types";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Image from "next/image";

import rockt from "@/public/images/rocket.png";

export default function GroupCard(props: GroupCardProps) {
  return (
    <Card className="bg-transparent py-4 sm:py-8 px-2 shadow-none">
      <CardHeader className="pb-0 px-6 flex-col items-center">
        <Image
          alt="Card background"
          className="object-cover rounded-xl bg-slate-200 p-3 w-12"
          src={props.imageSource}
        />
      </CardHeader>
      <CardBody className="overflow-visible">
        <h4 className="font-bold text-2xl text-center py-2">{props.title}</h4>
        <p className="text-center text-md pt-2">{props.description}</p>
      </CardBody>
    </Card>
  );
}
