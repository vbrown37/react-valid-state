export interface StateValidatorExecutor {
    isValid(value: unknown): boolean
}
