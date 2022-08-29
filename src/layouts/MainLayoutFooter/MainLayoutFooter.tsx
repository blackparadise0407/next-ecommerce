const MainLayoutFooter: React.FC<{}> = () => {
  return (
    <footer className="bg-black text-white pt-16">
      <div className="container">
        <div className="grid grid-cols-4">
          <div className="col-span-1 space-y-7">
            <h5 className="uppercase font-medium tracking-widest">
              Dotfashion
            </h5>
            <p className="text-sm text-neutral-400">
              The customer is at the heart of our unique business model, which
              includes design.
            </p>
            <picture className="block">
              <img src="/payment.jpg" alt="Payment methods" />
            </picture>
          </div>
          <div className="col-span-1 space-y-7">
            <h5 className="uppercase font-medium tracking-widest">Shopping</h5>
            <p className="text-sm text-neutral-400">
              The customer is at the heart of our unique business model, which
              includes design.
            </p>
          </div>
          <div className="col-span-1 space-y-7">
            <h5 className="uppercase font-medium tracking-widest">
              Dotfashion
            </h5>
            <p className="text-sm text-neutral-400">
              The customer is at the heart of our unique business model, which
              includes design.
            </p>
            <picture className="block">
              <img src="/payment.jpg" alt="Payment methods" />
            </picture>
          </div>
          <div className="col-span-1 space-y-7">
            <h5 className="uppercase font-medium tracking-widest">
              Newsletter
            </h5>
            <p className="text-sm text-neutral-400">
              Be the first to know about new arrivals, look books, sales &
              promos!
            </p>
          </div>
        </div>
        <hr className="mt-10 border-t-neutral-800" />
        <div className="py-5 text-center text-sm text-neutral-400">
          Copyright © 2022 All rights reserved | Made with by Kyle with &#9829;
        </div>
      </div>
    </footer>
  );
};

export default MainLayoutFooter;
