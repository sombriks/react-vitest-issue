import {describe, expect, it} from "vitest";
import {render, screen, fireEvent} from '@testing-library/react';

// @ts-ignore
import React from 'react'

import App from "./App.tsx";

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
