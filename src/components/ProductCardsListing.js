import ProductCard from "./ProductCard";
import React, { useEffect } from "react";
import { getAllProducts, getFeaturedProducts } from "../api/api";

const ProductCardsListing = ({
  ActiveTab,
  productsData,
  setProductsData,
  featuredproductIds,
  setFeaturedproductIds,
  setCartCounter,
  allFilters,
  selectedOptionTags,
  selectedOptionColor,
  selectedOptionMaterial,
}) => {
  useEffect(() => {
    if (ActiveTab === "allproducts") {
      getAllProducts()
        .then((response) => {
          setProductsData(response.data.products);
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
      getFeaturedProducts()
        .then((response) => {
          setFeaturedproductIds(
            response.data.featured.map((product) => product.productId)
          );
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }
  }, [ActiveTab, setFeaturedproductIds, setProductsData]);

  useEffect(() => {
    if (ActiveTab === "featuredproducts") {
      setProductsData((productsData) =>
        productsData.filter((product) =>
          featuredproductIds.includes(product.id)
        )
      );
    }
  }, [ActiveTab, featuredproductIds, setProductsData]);

  return (
    <>
      {productsData?.length ? (
        <div className="grid grid-cols-3 gap-x-14 gap-y-10 px-10">
          {productsData.map((productData) => {
            return (
              <>
                {
                  <ProductCard
                    productData={productData}
                    allFilters={allFilters}
                    setCartCounter={setCartCounter}
                    selectedOptionTags={selectedOptionTags}
                    selectedOptionColor={selectedOptionColor}
                    selectedOptionMaterial={selectedOptionMaterial}
                  />
                }
              </>
            );
          })}
        </div>
      ) : null}
      {!productsData?.length && (
        <div className="flex items-center justify-center space-x-2 w-full">
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
        </div>
      )}
    </>
  );
};

export default ProductCardsListing;
