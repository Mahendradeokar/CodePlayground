/* eslint-disable @next/next/no-img-element */
"use client";

import NextIcon from "@/components/icons/NextIcon";
import PreviousIcons from "@/components/icons/PreviosIcon";
import { Button, Carousel, CartIconSvg } from "@/components/shared";
import { useState } from "react";

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

const increaseQtyByOne = (setter: (fn: any) => void) => {
  setter((prev: number) => {
    return prev + 1;
  });
};

const decreaseQtyByOne = (setter: (fn: any) => void) => {
  setter((prev: number) => {
    if (prev !== 0) {
      return prev - 1;
    }
    return prev;
  });
};

export default function Men() {
  const [quantity, setQuantity] = useState<number>(0);
  return (
    <div className="mx-auto grid lg:grid-cols-2 lg:mt-12 gap-10 place-content-center">
      <div className="flex place-content-center">
        <div
          className="space-y-4 aspect-square"
          style={{ width: "clamp(0px, 100%, 30rem)" }}
        >
          <Carousel className="relative">
            {({ api }: any) => {
              return {
                slides: productImages.map((image, index) => (
                  <div className="embla__slide" key={image}>
                    <img
                      className="lg:rounded-2xl"
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
                  <div className="lg:hidden">
                    <div className="embla__prev absolute top-1/2 left-[1rem] flex place-content-center w-8 h-8 rounded-full bg-white">
                      <button
                        onClick={() => {
                          api && api.scrollNext();
                        }}
                      >
                        <PreviousIcons className="mr-1" />
                      </button>
                    </div>
                    <div className="embla__next absolute top-1/2 right-[1rem] flex place-content-center w-8 h-8 rounded-full bg-white">
                      <button
                        onClick={() => {
                          api && api.scrollPrev();
                        }}
                      >
                        <NextIcon className="ml-1" />
                      </button>
                    </div>
                  </div>
                ),
              };
            }}
          </Carousel>
        </div>
      </div>
      <div className="p-3 md:p-5 lg:p-0 grid gap-4 place-content-center">
        <div className="space-y-5 my-5">
          <h4 className="text-base text-primary font-bold uppercase">
            SNEAKER COMPANY
          </h4>
          <h1 className="text-4xl font-bold capitalize">
            Fall limited edition sneakers
          </h1>
        </div>
        <div className="space-y-8">
          <p className="text-neutral-dark-grayish-blue">
            These low-profile sneakers are your perfect casual wear companion,
            Featuring a durable rubber outer sole, they&apos;ll withstand
            everything the weather can offer.
          </p>
          <div className="flex gap-2 items-center">
            <span className="font-bold text-2xl">$125.00</span>
            <span className="rounded-md bg-primary-light px-2 py-1 text-primary font-bold">
              50%
            </span>
          </div>
          <del className="text-neutral-dark-grayish-blue text-lg font-semibold">
            $250
          </del>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex justify-between align-middle rounded-lg bg-neutral-light-grayish-blue gap-5 font-bold text-lg py-3 px-5">
              <button
                className="text-primary text-xl disabled:opacity-50"
                onClick={() => decreaseQtyByOne(setQuantity)}
                disabled={quantity === 0}
              >
                -
              </button>
              <span className="d-d-inline-block min-w-3 text-center">
                {quantity}
              </span>
              <button
                className="text-primary text-xl"
                onClick={() => increaseQtyByOne(setQuantity)}
              >
                +
              </button>
            </div>
            <div className="md:col-span-2">
              <Button className="shadow-lg shadow-primary">
                <CartIconSvg className="fill-neutral-light-grayish-blue" />
                Add To Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
