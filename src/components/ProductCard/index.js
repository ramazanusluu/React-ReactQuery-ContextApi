import React, { useState } from "react";
import { Link } from "react-router-dom";
import dummy from "../../image/dummy.jpg";
import "./style.css";

function ProductCard({ data }) {
  const [checked, setChecked] = useState([]);

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);

    //update this checked information info parent component
  };
  console.log(checked);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h6 className="fs-4 my-5">FİLTRELER</h6>

            {data.Result.Filters.map((filter, index) => (
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
                key={index}
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      {filter.DisplayName}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    {filter.Attributes.map((filterItem, key) => (
                      <div key={key} className="">
                        <div className="list-group">
                          <label className="list-group-item">
                            <input
                              className="form-check-input me-1"
                              type="checkbox"
                              id={filterItem.ID}
                              onChange={() => handleToggle(filterItem.ID)}
                              checked={
                                checked.indexOf(filterItem.ID) === -1
                                  ? false
                                  : true
                              }
                            />
                            {filterItem.ValueText}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-9">
            <div className="row">
              {data.Result.ProductList.map((item, key) => (
                <div key={key} className="col-sm-6 col-lg-4 col-xl-4">
                  <div className="card product-card my-5">
                    <div className="card-head text-center fw-bold">
                      <img
                        src={
                          item.FirstProductImageURL
                            ? item.FirstProductImageURL
                            : dummy
                        }
                        className="card-img-top"
                        alt={item.DisplayName}
                      />
                      <div className="card-text p-1">{item.DisplayName}</div>
                    </div>
                    <div className="card-body">
                      <p className="card-text text-muted text-center mb-0">
                        {item.AttributeList[0].DisplayName}
                      </p>
                      <p className="card-text text-muted text-center">
                        {item.AttributeList[1].DisplayName}
                      </p>
                      <h4 className="fw-bold text-center">
                        {item.StrikeThroughPriceToShowOnScreen > 1000
                          ? item.StrikeThroughPriceToShowOnScreen / 1000
                          : item.StrikeThroughPriceToShowOnScreen}
                        TL
                      </h4>
                      <div className="text-center my-4">
                        <input
                          type="checkbox"
                          name="check"
                          id={item.ID}
                          className="form-check-input"
                        />
                        <label
                          htmlFor={item.ID}
                          className="form-check-label text-muted"
                        >
                          Karşılaştır
                        </label>
                      </div>
                    </div>
                    <div>
                      <Link to={`product-detail/${item.ID}`}>
                        <button type="button" className="btn-incele">
                          İNCELE
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
