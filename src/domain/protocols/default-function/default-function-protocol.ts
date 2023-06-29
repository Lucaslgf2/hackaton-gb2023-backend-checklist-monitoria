
export namespace NsDefaultFunction {
  export type Output = {
    message: string
  } | undefined
}

export interface IFindDefaultFunction {
  find: () => Promise<NsDefaultFunction.Output>
}
