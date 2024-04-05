import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'
export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    createdAt: new Date(),
    description: 'Custom restaurent description',
    id: 'custom-restaurant-id',
    managerId: 'custom-user-id',
    name: 'Pizza Shop',
    updatedAt: new Date(),
  })
})
