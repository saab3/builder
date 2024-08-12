/* eslint-disable @next/next/no-img-element */

const ProductCard = ({
  // @ts-ignore
  product,
}) => {


  return (
    <div className="min-w-64 h-[24rem] bg-white p-2 space-y-1 rounded-md shadow-md">
        <img src={product?._media_?.image?.at(0)?.image} alt="" className="w-full h-44 object-contain"  />
        <h2 className=" text-base text-black  font-bold line-clamp-2">{product?.name?.at(0)}</h2>
        <div className="max-h-12 flex flex-wrap gap-1">
            {product?.suggest?.slice(0,5)?.map(
// @ts-ignore
            word => <p key={word} className="border border-gray-200 text-black rounded-md text-sm w-fit px-2">{word}</p>)}
        </div>
        <div className="flex justify-between items-center">
          <div className="rounded-md bg-orange-600 text-white font-bold px-2 h-fit">{Math.floor((product?.prices_with_tax?.price / product?.prices_with_tax?.original_price )*100)} %</div>
          <div className="flex flex-col">
            <span className="text-orange-600 font-bold">{product?.prices_with_tax?.price} SAR</span>
            <span className="text-gray-400 line-through">{product?.prices_with_tax?.original_price} SAR</span>
          </div>
        </div>
          <div className="flex bg-orange-600  text-white font-bold px-2 h-fit py-1 rounded-md justify-center">
                Add To Cart
          </div>
    </div>
  );
};

export default ProductCard;
