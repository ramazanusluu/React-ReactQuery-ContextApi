import React from "react";
import SearchBar from "../../components/SearchBar";
import Loading from "../../components/Loading";
import { useQuery } from "react-query";
import { fetchCategoryList } from "../../api";

function Search() {
  const { isLoading, error, data } = useQuery("category", fetchCategoryList);

  if (isLoading) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  console.log(data);
  return (
    <div>
      <SearchBar data={data} />
    </div>
  );
}

export default Search;
