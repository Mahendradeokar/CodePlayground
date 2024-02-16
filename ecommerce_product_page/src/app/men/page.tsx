import Image from "next/image";

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
    <div className="grid lg:grid-cols-2 gap-5">
        home
      {/* <div>
        <div className="grid place-content-center">
          <Image
            className="rounded-2xl"
            src={productImages[0]}
            alt="shoe product"
            width={200}
            height={200}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          {productThumbnail.map((image) => (
            <Image
              src={image}
              height={50}
              width={50}
              key={image}
              alt="product thumbnail"
            />
          ))}
        </div>
      </div>
      <div>
        <h4>SNEAKER COMPANY</h4>
        <h1>Fall limited edition sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion,
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div>
          <span>$125.00</span> <span>50%</span>
        </div>
        <del>$250</del>
      </div> */}
    </div>
  );
}
