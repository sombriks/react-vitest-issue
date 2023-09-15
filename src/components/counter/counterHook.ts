import {useState} from "react";

export function useCounterHook() {

    const [count, setCount] = useState(0)

    const updateCount = () => setCount((count) => count + 1)

    return {count, setCount, updateCount}
}
