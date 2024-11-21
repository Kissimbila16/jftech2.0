"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Authes from "../cardAuths";

export default function MyCarousel() {
  //   const [emblaRef] = useEmblaCarousel({ loop: false,duration:500 }, [Autoplay()]);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    speed: 500,
    align: "center",
  });

  return (
    <div className="embla mx-xl-5" ref={emblaRef}>
      {/* <div className=""> */}
     
      <div
        className="embla__container mx-3"
        id="list-team"
      >
        <div className="embla__slide d-xl-flex gap-2">
          <Authes
            name={"domingos J.kissimbila "}
            foto={"/logo.png"}
            func={"desenvolvedor web"}
          />
          <Authes
            name={"domingos J.kissimbila "}
            foto={"/logo.png"}
            func={"desenvolvedor web"}
          />
          <Authes
            name={"domingos J.kissimbila "}
            foto={"/logo.png"}
            func={"desenvolvedor web"}
          />
          <Authes
            name={"domingos J.kissimbila "}
            foto={"/logo.png"}
            func={"desenvolvedor web"}
          />
        </div>
        <div className="embla__slide d-xl-flex gap-2">
          <Authes
            name={"domingos J.kissimbila "}
            foto={"/logo.png"}
            func={"desenvolvedor web"}
          />
          <Authes
            name={"domingos J.kissimbila "}
            foto={"/logo.png"}
            func={"desenvolvedor web"}
          />
          <Authes
            name={"domingos J.kissimbila "}
            foto={"/logo.png"}
            func={"desenvolvedor web"}
          />
          <Authes
            name={" Lucas bartolomeu "}
            foto={"/logo.png"}
            func={"desenvolvedor web"}
          />
        </div>
      </div>  
         <div className="d-flex" id="hide-sm">
        <button onClick={() => emblaApi.scrollPrev()}>
          <i className="bi bi-caret-left fs-1"></i>
        </button>
        <button onClick={() => emblaApi.scrollNext()}>
          <i className="bi bi-caret-right fs-1"></i>
        </button>
      </div>
    </div>
  );
}
