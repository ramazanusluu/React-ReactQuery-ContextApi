import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchSubCategories } from "../../api";
import Loading from "../../components/Loading";
import SubCategoryCard from "../../components/SubCategoryCard";

function SubCategories() {
  const { category_id } = useParams();
  const { isLoading, error, data } = useQuery(
    ["subCategory", category_id],
    () => fetchSubCategories(category_id)
  );
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return "An error has occurred: " + error.message;
  }
  console.log(data);
  console.log(data.Result.TopCategory.SubCategoryList);
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <h5 className="display-6 text-center">{data.Result.CategoryName}</h5>
          {data.Result.TopCategory.SubCategoryList.map((item, key) => (
            <SubCategoryCard key={key} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SubCategories;
