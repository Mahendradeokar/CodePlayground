import { CartIconSvg } from "@/components/shared";

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

export default function Men() {
  return (
    <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 md:mt-12">
      <div className="grid place-content-center">
        <div className="overflow-hidden space-y-4">
          <div>
            <img
              className="md:rounded-2xl max-w-[100%] md:max-w-[30rem]"
              src={productImages[0]}
              alt="shoe product"
            />
          </div>
          <div className="hidden md:flex justify-between">
            {productThumbnail.map((image) => (
              <img
                className="object-fill w-[6.5rem] rounded-2xl"
                src={image}
                key={image}
                alt="product thumbnail"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="p-3 md:p-5 lg:p-0 grid gap-4 place-content-center">
        <div className="space-y-5 my-5">
          <h4 className="lg:text-lg md:text-base text-sm text-primary font-bold uppercase">
            SNEAKER COMPANY
          </h4>
          <h1 className="md:text-3xl text-lg lg:text-5xl font-bold capitalize">
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
            <span className="font-bold md:text-xl text-base lg:text-3xl">
              $125.00
            </span>
            <span className="rounded-md bg-primary-light px-2 py-1 text-primary font-bold">
              50%
            </span>
          </div>
          <del className="text-neutral-dark-grayish-blue text-xl font-semibold">
            $250
          </del>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex place-content-center items-center rounded-lg bg-neutral-light-grayish-blue gap-5 font-bold text-lg">
              <button className="p-3 text-primary text-2xl">-</button>
              <span>0</span>
              <button className="p-3 text-primary text-2xl">+</button>
            </div>
            <div className="col-span-2">
              <button className="flex place-content-center gap-4 items-center p-3 w-full bg-primary rounded-lg shadow-lg shadow-primary  text-neutral-light-grayish-blue text-lg font-bold">
                <CartIconSvg className="fill-neutral-light-grayish-blue" />
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
