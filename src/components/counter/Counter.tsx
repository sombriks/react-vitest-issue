import {useCounterHooks} from "./counterHooks.ts";

export const Counter = () => {

    const {count, updateCount} = useCounterHooks()

    return <>
        <button title="counter" onClick={updateCount}>
            count is {count}
        </button>
    </>
}
