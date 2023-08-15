import { json, useLoaderData } from "react-router";

const Categories = () => {
const data = useLoaderData();
console.log(data);

  return <h2>Shop By Category</h2>;
};

export default Categories;

export const loader = async () => {
    const response = await fetch('https://dummyjson.com/products/categories')

    if (!response.ok) {
        throw json({message: 'Could not fetch product categories', status: 500})
    } else {
        return response
    }
};
