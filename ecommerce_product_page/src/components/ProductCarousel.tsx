import Image from "next/image";
import NextIcon from "./icons/NextIcon";
import { Carousel } from "./shared";
import PreviousIcons from "@/components/icons/PreviosIcon";
import { ReactElement } from "react";
import { cn } from "@/utils";

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

type ProductCarousel = {
  slides: string[];
  thumbnail?: string[];
  showThumbnail?: boolean;
  showNavigation?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export default function ProductCarousel({
  slides,
  thumbnail,
  showThumbnail = true,
  showNavigation = true,
  ...props
}: ProductCarousel) {
  return (
    <Carousel {...props}>
      {({ api }: any) => ({
        slides: <Slides slides={productImages} />,
        thumbnailButtons: showThumbnail && (
          <Thumbnails
            thumbnails={productThumbnail}
            onClick={api?.scrollTo}
            active={api?.selectedScrollSnap}
          />
        ),
        buttons: showNavigation && (
          <div>
            <ActionBtn
              onClick={(e) => {
                e.stopPropagation();
                api?.scrollPrev();
              }}
              className=" absolute top-1/2 left-[-1rem]"
            >
              <PreviousIcons className="stroke-black hover:stroke-primary" />
            </ActionBtn>
            <ActionBtn
              onClick={(e) => {
                e.stopPropagation();
                api?.scrollNext();
              }}
              className="absolute top-1/2 right-[-1rem]"
            >
              <NextIcon className=" stroke-black hover:stroke-primary" />
            </ActionBtn>
          </div>
        ),
      })}
    </Carousel>
  );
}

const Slides = ({ slides }: { slides: string[] }) => {
  return slides.map((image: string) => (
    <div className="embla__slide" key={image}>
      <Image
        width={800}
        height={800}
        className="lg:rounded-2xl"
        src={image}
        alt="shoe product"
      />
    </div>
  ));
};

const Thumbnails: React.FC<
  {
    thumbnails: string[];
    active: () => void;
  } & React.HTMLAttributes<HTMLButtonElement>
> = ({ thumbnails, active, ...props }) => {
  const activeSlide = active && active();
  const activeCls = "border-primary border-4"
  return (
    <div className="hidden lg:flex justify-between">
      {thumbnails.map((image: string, index: number) => (
        <button {...props} key={image}>
          <div className="rounded-2xl">
            <Image
              className="object-fill w-[6.5rem] hover:opacity-45 rounded-md d-block"
              src={image}
              alt="product thumbnail"
              width={200}
              height={200}
            />
          </div>
        </button>
      ))}
    </div>
  );
};

type ActionProps = {
  children: React.ReactNode;
};

const ActionBtn: React.FC<
  ActionProps & React.HTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "embla__prev flex place-content-center w-8 h-8 rounded-full bg-white",
        className
      )}
    >
      <button {...props}>{children}</button>
    </div>
  );
};
