export interface ICalculateGrowthRate {
  calc: (totalPreviousPeriod: number, totalCurrentPeriod: number, decimals?: number, showSignal?: boolean) => string
  calc2: (totalPreviousPeriod: number, totalCurrentPeriod: number, decimals?: number) => number | null
}
