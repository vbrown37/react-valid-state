import React, {useEffect, useState} from 'react';
import {StateValidatorExecutor} from "./validator/StateValidatorExecutor";

export function useValidState<T extends unknown>(initialValue: T, ...validators: StateValidatorExecutor[]): [T, (value: T) => void, boolean] {

    const [state, setState] = useState<T>(initialValue);
    const [isValid, setIsValid] = useState<boolean>(true);

    useEffect(() => {
        setValidState(initialValue);
    }, [])

    const setValidState = (value: T) => {
        setIsValid(true)
        validators.forEach((validator: StateValidatorExecutor) => {
            if (!validator.isValid(value)) {
                setIsValid(false);
            }
        })
        setState(value);
    }

    return [state, setValidState, isValid]
}


