export interface ICalculateParticipationRate {
  calc: (globalValue: number, localValue: number, decimals?: number) => string
  calc2: (globalValue: number, localValue: number, decimals?: number) => number | null
}
