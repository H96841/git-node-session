import apiSlice from "../../app/apiSlice";
const basketApiSlice=apiSlice.injectEndpoints({
    endpoints:(x)=>({
        getBasket:x.query({
            query:(basketUser)=>({
                url:"api/basket",
                method:"GET",
                body:basketUser
            })
        }),
        deleteOneProduct:x.mutation({
            query:(deleteProduct)=>({
                url:"api/basket",
                method:"DELET",
                body:deleteProduct
            }),

    }),
    /////////////////////////////////
        addToBasket:x.mutation({
            query:(prodectId)=>({
                url:"api/basket",
                method:"POST",
                body:prodectId
            }),

    })
})
})
export const {useDeleteOneProductMutation,useGetBasketQuery,useAddToBasketMutation}=basketApiSlice
//useAddToBasketMutation