import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

function SearchBar({ data }) {
  const [filteredData, setFilteredData] = useState([]);

  //   const handleFilter = (event) => {
  //     const searchWord = event.target.value;
  //     const newFilter = data.Result.TreeList.filter((value) => {
  //       return value.DisplayName.toLowerCase().includes(searchWord.toLowerCase());
  //     });

  //     if (searchWord === "") {
  //       setFilteredData([]);
  //     } else {
  //       setFilteredData(newFilter);
  //     }
  //   };

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
                onChange={(e) => {
                  setFilteredData(e.target.value);
                }}
              />
              <button className="btn btn-danger" type="button">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            {filteredData.length !== 0 && (
              <div>
                {data.Result.TreeList.map((item, key) => (
                  <div key={key}>
                    <Link to={`/category/${item.ID}`}>
                      <h5 className="text-danger">{item.DisplayName}</h5>
                    </Link>
                    {item.SubCategoryList.filter((val) => {
                      if (filteredData === "") {
                        return val;
                      } else if (
                        val.DisplayName.toLowerCase().includes(
                          filteredData.toLowerCase()
                        )
                      ) {
                        return val;
                      }
                    }).map((item2, key2) => (
                      <div key={key2}>
                        <Link to={`/products/${item2.ID}`}>
                          <h5 className="text-dark">{item2.DisplayName}</h5>
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
