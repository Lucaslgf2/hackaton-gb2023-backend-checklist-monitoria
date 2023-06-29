export interface ISecretsLoader {
  initSecrets: (envVarName: string, awsSecretName: string) => Promise<void>
}
