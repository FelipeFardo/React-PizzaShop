import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'
export const getPopularProductMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { amount: 5, product: 'Pizza 01' },
    { amount: 3, product: 'Pizza 02' },
    { amount: 2, product: 'Pizza 03' },
    { amount: 1, product: 'Pizza 04' },
    { amount: 7, product: 'Pizza 05' },
  ])
})
