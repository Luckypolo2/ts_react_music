import { NetRequest } from '@/service/service'

export function getBanners() {
  return NetRequest.get({
    url: '/banner'
  })
}
