import { HttpRequest, HttpResponse } from './http'

export interface Middleware {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  handle (httpRequest: HttpRequest): Promise<HttpResponse>
}
