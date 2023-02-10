export interface Environment {
  mode: ApplicationMode,
  backendUrl: string
}
export enum ApplicationMode {
  production = 'production',
  development = 'development'
}
