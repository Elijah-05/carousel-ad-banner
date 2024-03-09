import { useEffect, useRef, useState } from "react";
import Chevron from "./components/Chevron";
import { items } from "./data";
import Pagination from "./components/Pagination";
import SingleAd from "./components/SingleAd";

const App = () => {
  const advertRef = useRef<Map<string | number, HTMLElement> | null>(null);
  const [activeAd, setActiveAd] = useState<number>(1);
  const targetRef = useRef(null);

  console.log("activeID: ", activeAd);

  const scrollToId = (itemId: number) => {
    const map = getMap();
    const node = map.get(itemId);

    node?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });

    setActiveAd(itemId);
  };

  const getMap = () => {
    if (!advertRef.current) {
      advertRef.current = new Map<number | string, HTMLElement>();
    }
    return advertRef.current;
  };

  useEffect(() => {
    const autoScroll = setTimeout(() => {
      if (activeAd < 4) {
        scrollToId(activeAd + 1);
      } else {
        scrollToId(0);
      }
    }, 3000);

    return () => {
      clearTimeout(autoScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeAd]);

  return (
    <div className="relative max-w-xl mx-auto mt-10 rounded-xl overflow-hidden h-[350px] shadow-[0px_8px_18px_#ffffff10]">
      <div
        ref={targetRef}
        className=" hideScrollBar flex select-none items-center overflow-x-scroll overflow-y-hidden w-full"
      >
        {items.map((ad) => (
          <div
            key={ad.id}
            ref={(node) => {
              const map = getMap();
              if (node) {
                map.set(ad.id, node);
              } else map.delete(ad.id);
            }}
            className={`${
              ad.id !== 1 && "fully-center"
            } relative shrink-0 w-full h-fit`}
          >
            <SingleAd ad={ad} />
          </div>
        ))}
      </div>
      <Chevron
        onClick={() => scrollToId(activeAd ? activeAd - 1 : items.length - 1)}
      />
      <Chevron
        onClick={() =>
          scrollToId(activeAd <= items.length - 2 ? activeAd + 1 : 0)
        }
        right
      />
      <div className="absolute flex gap-2 translate-x-1/2 right-1/2 bottom-4 z-50">
        {items.map((item) => (
          <Pagination
            onClick={() => scrollToId(item.id)}
            isActive={activeAd === item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
