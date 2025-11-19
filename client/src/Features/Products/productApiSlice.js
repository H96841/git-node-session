import apiSlice from "../../app/apiSlice";

const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query({
            query: () => ({
                url: "api/products",
                method: "GET"
            })
        })

    })
})
export const { useGetProductsQuery } = productsApiSlice