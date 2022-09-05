import React from "react";
import Loading from "../../components/Loading";
import { useQuery } from "react-query";
import CategoryCard from "../../components/CategoryCard";
import { fetchCategoryList } from "../../api";

function Categories() {
  const { isLoading, error, data } = useQuery("category", fetchCategoryList);

  if (isLoading) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  console.log(data);
  console.log(data.Result.TreeList);
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          {data.Result.TreeList.map(
            (item, key) =>
              item.ID < 11 && <CategoryCard key={key} item={item} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Categories;
