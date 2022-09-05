import React from "react";
import "./style.css";
import Loading from "../../components/Loading";
import { useQuery } from "react-query";
import { fetchCategoryList } from "../../api";
import { Link } from "react-router-dom";

function Sidebar() {
  const { isLoading, error, data } = useQuery("category", fetchCategoryList);

  if (isLoading) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  console.log("Sidebar", data.Result.TreeList);
  return (
    <div className="container">
      <div className="sidebar">
        {data.Result.TreeList.map((item, key) => (
          <ul key={key}>
            {item.ID < 11 && (
              <li>
                <Link to={`/category/${item.ID}`}>
                  <button className="btn btn-danger category">
                    {item.DisplayName}
                  </button>
                </Link>
                {item.SubCategoryList.map((item2, key2) => (
                  <ul key={key2}>
                    <li>
                      <Link to={`/products/${item2.ID}`}>
                        <button className="btn btn-danger subCategory">
                          {item2.DisplayName}
                        </button>
                      </Link>
                    </li>
                  </ul>
                ))}
              </li>
            )}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
