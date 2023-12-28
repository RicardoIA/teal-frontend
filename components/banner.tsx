import { Button } from "@nextui-org/button";
import { subtitle, title } from "./primitives";
import { Link } from "@nextui-org/link";

export default function Banner() {
  return (
    <section className="flex items-center justify-start py-20 ">
      <div className="flex flex-col sm:w-3/4 md:w-2/4 w-full justify-start">
        <h4 className={subtitle({ size: "sm" })}>
          MANAGED IT SERVICES EXCEPTIONAL
        </h4>
        <h1 className={title({ size: "xlg" })}>TECHNOLOGY</h1>
        <br />
        <h1 className={title({ size: "xlg" })}>OBSESSIVE SERVICE.</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan
          molestie elit, ac mollis massa interdum ac. Aenean aliquam ornare nibh
          nec porta.
        </h2>

        <div className="flex flex-col items-center gap-4 sm:gap-7 md:gap-2 py-4 sm:py-10 sm:flex-row sm:justify-center">
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="solid"
            className="text-md w-full sm:w-2/5 md:w-1/2 py-6"
          >
            Empower my team today
          </Button>

          <Button
            as={Link}
            color="primary"
            href="#"
            variant="bordered"
            className="text-md w-full sm:w-2/5 md:w-1/2 py-6"
          >
            Discover our services
          </Button>
        </div>
      </div>
    </section>
  );
}
