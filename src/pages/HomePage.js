import { useState } from "react";
import ShoppingCartIcon from "../assets/images/ShoppingCart.svg";
import ProductCardsListing from "../components/ProductCardsListing";
import SideBar from "../components/SideBar";

function HomePage() {
  const [allFilters, setAllFilters] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);
  const [productsData, setProductsData] = useState([]);
  const [ActiveTab, setActiveTab] = useState("allproducts");
  const [featuredproductIds, setFeaturedproductIds] = useState([]);
  const [selectedOptionTags, setselectedOptionTags] = useState("All");
  const [selectedOptionColor, setselectedOptionColor] = useState("All");
  const [selectedOptionMaterial, setselectedOptionMaterial] = useState("All");

  const handleAllProducts = () => setActiveTab("allproducts");
  const handlefeaturedProducts = () => setActiveTab("featuredproducts");

  return (
    <>
      <div className="flex items-center justify-center max-w-9xl bg-white-500 mx-auto w-ful h-20 font-sans text-lg font-bold p-1">
        MYCOOLSHOP.COM
      </div>
      <div className="max-w-screen-2xl bg-[#ececec] mx-auto w-full text-center font-sans text-sm py-4">
        <div className="flex justify-between px-8">
          <div className="flex gap-8 items-center">
            <p
              className={`cursor-pointer ${
                ActiveTab === "allproducts" ? "font-medium" : "font-light"
              } text-[#000]`}
              onClick={handleAllProducts}
            >
              All Products
            </p>
            <p
              className={`cursor-pointer ${
                ActiveTab === "featuredproducts" ? "font-medium" : "font-light"
              } text-[#000]`}
              onClick={handlefeaturedProducts}
            >
              Featured Products
            </p>
          </div>
          <div className="flex gap-1 items-center ">
            <img
              src={ShoppingCartIcon}
              height={30}
              width={30}
              alt="shopping cart"
            />
            <p className="font-bold text-base">{cartCounter}</p>
          </div>
        </div>
      </div>
      <div className="mx-auto my-10 max-w-screen-2xl sidebar-products-container">
        <SideBar
          setAllFilters={setAllFilters}
          allFilters={allFilters}
          selectedOptionTags={selectedOptionTags}
          setselectedOptionTags={setselectedOptionTags}
          selectedOptionColor={selectedOptionColor}
          selectedOptionMaterial={selectedOptionMaterial}
          setselectedOptionMaterial={setselectedOptionMaterial}
          setselectedOptionColor={setselectedOptionColor}
        />
        <ProductCardsListing
          ActiveTab={ActiveTab}
          productsData={productsData}
          setProductsData={setProductsData}
          featuredproductIds={featuredproductIds}
          setFeaturedproductIds={setFeaturedproductIds}
          setCartCounter={setCartCounter}
          allFilters={allFilters}
          selectedOptionTags={selectedOptionTags}
          selectedOptionColor={selectedOptionColor}
          selectedOptionMaterial={selectedOptionMaterial}
        />
      </div>
    </>
  );
}

export default HomePage;
