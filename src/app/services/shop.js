import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://react-native-ecommerce-1-default-rtdb.firebaseio.com/",
  }),
  endpoints: (builder) => ({
    getProductsByCategory: builder.query({
      query: (categoria) =>
        `/products.json?orderBy="category"&equalTo="${categoria}"`,
      transformResponse: (response) => {
        const data = Object.values(response);
        return data;
      },
    }),
    getCatgories: builder.query({
      query: () => `/categorias.json`,
    }),

    getProduct: builder.query({
      query: (id) => `/products/${id}.json`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProductsByCategoryQuery,
  useGetCatgoriesQuery,
  useGetProductQuery,
} = shopApi;
