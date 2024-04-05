import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'
export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'john doe',
      email: 'johndoe@example.com',
      phone: '1232113443',
      createdAt: new Date(),
      updatedAt: null,
      role: 'manager',
    })
  },
)
