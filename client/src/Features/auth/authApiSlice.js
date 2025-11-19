import apiSlice from "../../app/apiSlice";

const authApiSlice=apiSlice.injectEndpoints({
    endpoints:(x)=>({
        registerFunc:x.mutation({
            query:(regsiterUser)=>({
                url:"api/auth/register",
                method:"POST",
                body:regsiterUser
            })
        }),
        loginFunc:x.mutation({
            query:(loginUser)=>({
                url:"api/auth/login",
                method:"POST",
                body:loginUser
            }),
    })
})
})
export const {useRegisterFuncMutation,useLoginFuncMutation}=authApiSlice