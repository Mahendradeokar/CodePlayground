import NextIcon from "./icons/NextIcon";
import { Carousel } from "./shared";
import PreviousIcons from "@/components/icons/PreviosIcon";

const productThumbnail = [
  "/images/image-product-1-thumbnail.jpg",
  "/images/image-product-2-thumbnail.jpg",
  "/images/image-product-3-thumbnail.jpg",
  "/images/image-product-4-thumbnail.jpg",
];
const productImages = [
  "/images/image-product-1.jpg",
  "/images/image-product-2.jpg",
  "/images/image-product-3.jpg",
  "/images/image-product-4.jpg",
];

export default function OverlayCarousel() {
  return (
    <div className="space-y-4 aspect-square relative">
      <Carousel className="lg:rounded-md">
        {({ api }: any) => {
          return {
            slides: productImages.map((image, index) => (
              <div className="embla__slide" key={image}>
                <img
                  src={image}
                  alt="shoe product"
                />
              </div>
            )),
            thumbnailButtons: (
              <div className="hidden lg:flex justify-between">
                {productThumbnail.map((image, index) => (
                  <img
                    className="object-fill w-[6.5rem] rounded-2xl border-4 border-transparent hover:opacity-45"
                    src={image}
                    key={image}
                    alt="product thumbnail"
                    onClick={() => api && api.scrollTo(index)}
                  />
                ))}
              </div>
            ),
            buttons: (
              <>
                <div className="embla__prev absolute top-1/2 left-[-1.3rem] flex place-content-center w-10 h-10 rounded-full bg-white">
                  <button
                    onClick={() => {
                      api && api.scrollPrev();
                    }}
                  >
                    <PreviousIcons className="mr-1" />
                  </button>
                </div>
                <div className="embla__next absolute top-1/2 right-[-1.3rem] flex place-content-center w-10 h-10 rounded-full bg-white">
                  <button
                    onClick={() => {
                      api && api.scrollNext();
                    }}
                  >
                    <NextIcon className="ml-1 hover:fill-primary" />
                  </button>
                </div>
              </>
            ),
          };
        }}
      </Carousel>
    </div>
  );
}
