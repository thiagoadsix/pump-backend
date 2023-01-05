import axios, { AxiosInstance, AxiosResponse } from 'axios'

export class AxiosGateway {
  private readonly service: AxiosInstance

  constructor (private readonly config: any) {
    this.service = axios.create({
      ...this.config
    })
  }

  public async post (path: string, data: any): Promise<AxiosResponse> {
    try {
      const axios = await this.serviceInstance()
      const response = await axios.post(path, data)

      return response
    } catch (error) {
      console.error(error)
      return error
    }
  }

  public async get (path: string): Promise<AxiosResponse> {
    try {
      const axios = await this.serviceInstance()
      const response = await axios.get(path)

      return response
    } catch (error) {
      console.error(error)
      return error
    }
  }

  private async serviceInstance (): Promise<AxiosInstance> {
    return this.service
  }
}
