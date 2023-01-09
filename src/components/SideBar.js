import React, { useEffect } from "react";
import apiClient from "../libs/apiClient";

const SideBar = ({
  allFilters,
  setAllFilters,
  selectedOptionTags,
  setselectedOptionTags,
  selectedOptionColor,
  selectedOptionMaterial,
  setselectedOptionMaterial,
  setselectedOptionColor,
}) => {
  useEffect(() => {
    let Colors = "colors";
    let Material = "material";
    const promise1 = apiClient.get(Colors);
    const promise2 = apiClient.get(Material);

    Promise.all([promise1, promise2])
      .then(function (allresponse) {
        setAllFilters(() => [
          ...allresponse.map((response) => {
            return {
              type: Object.keys(response.data)[0],
              options: response.data[Object.keys(response.data)[0]],
            };
          }),
        ]);
        setAllFilters((filters) => [
          ...filters,
          {
            type: "tags",
            options: [
              {
                id: 2,
                name: "generic",
              },
            ],
          },
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setAllFilters]);

  const getSelected = (filterType, option) => {
    if (filterType === "tags")
      return selectedOptionTags === option ? "font-medium" : "font-normal";
    if (filterType === "material")
      return selectedOptionMaterial === option ? "font-medium" : "font-normal";
    if (filterType === "colors")
      return selectedOptionColor === option ? "font-medium" : "font-normal";
  };

  const handleChangeOption = (event, filterType) => {
    if (filterType === "tags") setselectedOptionTags(event.target.innerText);
    if (filterType === "colors") setselectedOptionColor(event.target.innerText);
    if (filterType === "material")
      setselectedOptionMaterial(event.target.innerText);
  };

  return (
    <div className="flex flex-col gap-5">
      {allFilters.map((filter) => {
        return (
          <div className="px-8">
            <div className="text-base font-light py-1 cursor-pointer">
              {filter.type}
            </div>
            <div
              className={`text-sm cursor-pointer ${getSelected(
                filter.type,
                "All"
              )} py-1`}
              onClick={(e) => handleChangeOption(e, filter.type)}
            >
              All
            </div>
            {filter.options.map((option) => (
              <>
                <div
                  className={`text-sm cursor-pointer ${getSelected(
                    filter.type,
                    option.name
                  )} py-1`}
                  onClick={(e) => handleChangeOption(e, filter.type)}
                >
                  {option.name}
                </div>
              </>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
