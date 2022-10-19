import React from "react";
import { categoryList, ratingList } from "../../../constants";
import CheckboxProton from "../../common/CheckboxProton";
import FilterListToggle from "../../common/FilterListToggle";
import SliderProton from "../../common/SliderProton";
import "./styles.css";

const FilterPanel = ({
  selectedCategory,
  selectCategory,
  selectedRating,
  selectedPrice,
  selectRating,
  cuisines,
  changeChecked,
  changePrice,
}) => (
  <div>
    <div className="input-group">
      <p className="label">Sản phẩm</p>
      <FilterListToggle
        options={categoryList}
        value={selectedCategory}
        selectToggle={selectCategory}
      />
    </div>
    <div className="input-group">
      <p className="label">Khu vực</p>
      {cuisines.map((cuisine) => (
        <CheckboxProton
          key={cuisine.id}
          cuisine={cuisine}
          changeChecked={changeChecked}
        />
      ))}
    </div>
    <div className="input-group">
      <p className="label-range">Mức giá</p>
      <SliderProton value={selectedPrice} changePrice={changePrice} />
    </div>
    <div className="input-group">
      <p className="label">Sao đánh giá</p>
      <FilterListToggle
        options={ratingList}
        value={selectedRating}
        selectToggle={selectRating}
      />
    </div>
  </div>
);

export default FilterPanel;
