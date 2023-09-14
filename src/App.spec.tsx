import {describe, expect, it} from "vitest";
import {render, screen, fireEvent, renderHook, act} from '@testing-library/react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react'

import App from "./App.tsx";
import {useConuterHook} from "./components/counterHook.ts";

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

})
