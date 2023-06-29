declare module '@grupoboticario/secrets-loader' {
  export class SecretsLoader {
    async loadSecrets ([{ EnvVarName: string, SecretId: string }]): Promise<void>
  }
}
