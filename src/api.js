// Tüm api call işlemleri burda gerçekleştirilecek.
import axios from "axios";

export const fetchCategoryList = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/CategoryList`
  );
  return data;
};

export const fetchSubCategories = async (id) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/ProductList?CategoryID=${id}`
  );
  return data;
};

export const fetchProducts = async (id) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/ProductList?CategoryID=${id}`
  );
  return data;
};

export const fetchProductDetail = async (id) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/ProductDetail?productId=${id}`
  );
  return data;
};
