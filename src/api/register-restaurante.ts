import { api } from '@/lib/axios'

export interface RegisterRestauranteBody {
  restauranteName: string
  managerName: string
  email: string
  phone: string
}
export async function registerRestaurante({
  email,
  managerName,
  phone,
  restauranteName,
}: RegisterRestauranteBody) {
  await api.post('/authenticate', {
    email,
    managerName,
    phone,
    restauranteName,
  })
}
