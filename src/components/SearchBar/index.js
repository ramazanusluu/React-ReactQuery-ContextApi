import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

function SearchBar({ data }) {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.Result.TreeList.filter((value) => {
      return value.DisplayName.toLowerCase().includes(searchWord.toLowerCase());
    });
   
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="input-group my-5">
              <input
                type="text"
                className="form-control"
                placeholder="Ürün, kategori, servis, mağaza ara"
                onChange={handleFilter}
              />
              <button className="btn btn-danger" type="button">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            {filteredData.length !== 0 && (
              <div>
                {filteredData.map((item, key) => (
                  <div key={key}>
                    <Link to={`/category/${item.ID}`}>
                      <h4> {item.DisplayName}</h4>
                    </Link>
                    {item.SubCategoryList.map((item2, key2) => (
                      <div key={key2}>
                        <Link to={`/products/${item2.ID}`}>
                          <h6>{item2.DisplayName}</h6>
                        </Link>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
