import ky from 'ky'

export class AppService {
  public static API_URL: string = process.env.API_URL as string

  public static async register(args: { json: Record<string, string> }): Promise<unknown> {
    return ky.post(`${AppService.API_URL}/auth/register`, { json: args.json })
  }
}
