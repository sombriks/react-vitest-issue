import {describe, expect, it} from "vitest";
import {render, screen, fireEvent, renderHook, act} from '@testing-library/react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react'

import App from "./App.tsx";
import {useConuterHook} from "./counterHook.ts";

describe("sample App test", ()=> {

    it("should mount, get button and click", async () => {
        const component = render(
            <App/>,
        )

        const result = await screen.findByTitle("counter")

        expect(component).toBeTruthy()
        expect(result).toBeTruthy()
        expect(result.innerHTML).toEqual("count is 0")

        fireEvent.click(result)

        expect(result.innerHTML).toEqual("count is 1")
    })

    it("should render hook and update state", async () => {
        const hook = renderHook(() => useConuterHook())

        expect(hook).toBeTruthy()

        expect(hook.result.current.count).toEqual(0)

        act(() => hook.result.current.updateCount())

        expect(hook.result.current.count).toEqual(1)
    })

})
