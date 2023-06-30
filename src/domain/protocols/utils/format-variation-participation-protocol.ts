export interface IFormatVariationParticipation {
  format: (value: number, decimals?: number) => string
  calcAndformat: (globalPreviousValue: number, localPreviousValue: number, globalCurrentValue: number, localCurrentValue: number, decimals?: number) => string
}
