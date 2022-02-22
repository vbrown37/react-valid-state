import {StateValidatorExecutor} from "./StateValidatorExecutor";

export class StateValidator {

    static max(max: number): StateValidatorExecutor {
        return {
            isValid(value: number): boolean {
                return value <= max;
            }
        }
    }

    static min(min: number): StateValidatorExecutor {
        return {
            isValid(value: number): boolean {
                return value >= min;
            }
        }
    }

    static notEmpty(): StateValidatorExecutor {
        return {
            isValid(value: string): boolean {
                return !(value === null || value.length === 0)
            }
        }
    }

    static notBlank(): StateValidatorExecutor {
        return {
            isValid(value: string): boolean {
                return !(value === "")
            }
        }
    }

    static matches(regex: string): StateValidatorExecutor {
        return {
            isValid(value: string): boolean {
                return new RegExp(regex).test(value);
            }
        }
    }
}
