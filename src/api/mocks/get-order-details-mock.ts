import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsResponse,
  GetOrdersDetailsParams,
} from '../get-order-details'
export const getOrderDetailsMock = http.get<
  GetOrdersDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'john doe',
      email: 'johndoe@example.com',
      phone: '123231323',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 5000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: { name: 'Pizza Pepperoni' },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 2000,
        product: { name: 'Pizza 4 queijos' },
        quantity: 2,
      },
    ],
  })
})
