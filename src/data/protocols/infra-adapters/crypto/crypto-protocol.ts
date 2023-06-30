export interface ICrypto {
  generateUUID: () => string
  generateHash: (size?: number) => string
}
