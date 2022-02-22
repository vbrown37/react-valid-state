# react-valid-state

## Description

react-valid-state make state validation easy and fast.

## Install

With [npm](https://www.npmjs.com/)

```sh
npm install react-valid-state --save
```

With [yarn](https://yarnpkg.com/)

```sh
yarn add react-valid-state --save
```

## Usage

```tsx
const Test = () => {

    // Value must be between 3 and 5
    const [value, setValue, isValueValid]
        = useValidState<number>(1, StateValidator.min(3), StateValidator.max(5));

    return (
        <div>
            {isValueValid && <h1>Value has been validated !</h1>}
        </div>
    );
};
```

## RoadMap

- Access to violated constraints via state array :

```tsx
const [value, setValue, isValueError, violations]
    = useValidState<number>(1, StateValidator.max(5), StateValidator.min(1));
```

- Add validation custom trigger
