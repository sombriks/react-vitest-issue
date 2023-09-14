import {useConuterHook} from "./counterHook.ts";

export const Counter = () => {

    const {count, updateCount} = useConuterHook()

    return <>
        <button title="counter" onClick={updateCount}>
            count is {count}
        </button>
    </>
}
