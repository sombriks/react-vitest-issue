import {useCounterHook} from "./counterHook.ts";

export const Counter = () => {

    const {count, updateCount} = useCounterHook()

    return <>
        <button title="counter" onClick={updateCount}>
            count is {count}
        </button>
    </>
}
