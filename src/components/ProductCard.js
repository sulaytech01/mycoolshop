import React from "react";

const ProductCard = ({
  productData,
  setCartCounter,
  allFilters,
  selectedOptionTags,
  selectedOptionColor,
  selectedOptionMaterial,
}) => {
  const handleAddCart = () => setCartCounter((cartCounter) => cartCounter + 1);
  const colors = allFilters[0];
  const material = allFilters[1];
  const tags = allFilters[2];

  const colorCheck = (currentColor) => {
    if (selectedOptionColor === "All") {
      return true;
    } else {
      return selectedOptionColor === currentColor;
    }
  };
  const materialCheck = (currentMaterial) => {
    if (selectedOptionMaterial === "All") {
      return true;
    } else {
      return selectedOptionMaterial === currentMaterial;
    }
  };

  const checkFilter = () => {
    const currentColor = colors?.options?.find(
      (option) => option?.id === productData?.colorId
    )?.name;

    const currentMaterial = material?.options?.find(
      (option) => option?.id === productData?.materialId
    )?.name;
    if (
      selectedOptionColor === "All" &&
      selectedOptionMaterial === "All" &&
      selectedOptionTags === "All"
    ) {
      return true;
    } else {
      return colorCheck(currentColor) && materialCheck(currentMaterial);
    }
  };

  return (
    <>
      {productData && checkFilter() && (
        <div
          className="w-full relative card"
          id={productData?.id}
          onClick={handleAddCart}
        >
          <img
            height={442}
            width={332}
            src={productData?.image}
            alt={productData?.name}
            className="hover:brightness-50 cursor-pointer"
          />
          <p className="absolute top-48 right-32 text-white text-lg font-medium cursor-pointer add-cart-text">
            Add Cart
          </p>
          <div className="pt-3">
            <h3 className="font-serif text-lg font-medium">
              {productData?.name}
            </h3>
            <div className="flex gap-2">
              <span
                className="uppercase text-[#4F4733] font-bold text-sm"
                id={productData?.colorId}
              >
                {
                  colors?.options?.find(
                    (option) => option?.id === productData?.colorId
                  )?.name
                }
              </span>
              <span
                className="uppercase text-[#4F4733] font-normal text-sm"
                id={productData?.materialId}
              >
                {
                  material?.options?.find(
                    (option) => option?.id === productData?.materialId
                  )?.name
                }
              </span>
            </div>
            <p className="pt-3 font-normal text-sm text-[#5A112B]">{`INR ${productData?.price}.00`}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
