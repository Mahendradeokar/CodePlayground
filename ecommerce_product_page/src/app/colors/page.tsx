import Image from "next/image";

export default function Color() {
  return (
    <main className="flex min-h-screen gap-5 p-24">
      <div className="p-2 flex-grow-0 flex-shrink-0 bg-primary">bg-primary</div>
      <div className="p-2 flex-grow-0 flex-shrink-0 bg-primary-light">
        bg-primary-light
      </div>
      <div className="p-2 flex-grow-0 flex-shrink-0 bg-white">bg-white</div>
      <div className="p-2 flex-grow-0 flex-shrink-0 bg-black">bg-black</div>
      <div className="p-2 flex-grow-0 flex-shrink-0 bg-black-overlay">
        bg-black-overlay
      </div>
      <div className="p-2 flex-grow-0 flex-shrink-0 bg-neutral-very-dark-blue">
        bg-neutral-very-dark-blue
      </div>
      <div className="p-2 flex-grow-0 flex-shrink-0 bg-neutral-dark-grayish-blue">
        bg-neutral-dark-grayish-blue
      </div>
      <div className="p-2 flex-grow-0 flex-shrink-0 bg-neutral-grayish-blue">
        bg-neutral-grayish-blue
      </div>
      <div className="p-2 flex-grow-0 flex-shrink-0 bg-neutral-light-grayish-blue">
        bg-neutral-light-grayish-blue
      </div>
    </main>
  );
}
