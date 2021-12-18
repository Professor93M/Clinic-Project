import { useRef } from "react";
import data from "../../data.json";
import ProductCard from "./Card";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/outline";

const Carosul = () => {
  const listRef = useRef();

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: -170,
        behavior: "smooth",
      });
    }
    console.log(listRef.current);
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: 170,
        behavior: "smooth",
      });
    }
    console.log(listRef.current);
  };

  return (
    <>
      {data.length > 0 ? (
        <div
          style={{ height: "60vh" }}
          className="flex items-center mt-8 overflow-y-hidden"
        >
          <ArrowLeftIcon
            onClick={scrollLeft}
            className="cursor-pointer "
            width={50}
            height={50}
          />
          <div
            ref={listRef}
            className="flex  items-center justify-start overflow-hidden xl:w-107 lg:w-104 md:w-102 sm:w-100 xs:w-60 w-32 mx-auto space-x-4"
            style={{ maxWidth: "81rem", height: "60vh" }}
          >
            {data.map((p) => (
              <div key={p.id} className="w-60">
                <ProductCard {...p} />
              </div>
            ))}
          </div>
          <ArrowRightIcon
            onClick={scrollRight}
            className="cursor-pointer"
            width={50}
            height={50}
          />
        </div>
      ) : (
        <h1 className="h-64 pt-20 text-center text-3xl">nothing is here yet</h1>
      )}
    </>
  );
};

export default Carosul;
