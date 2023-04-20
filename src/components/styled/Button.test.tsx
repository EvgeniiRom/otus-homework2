import { fireEvent, screen } from "@testing-library/react";
import React from "react";
import { renderWithProviders } from "../../utils/testUtils";
import Button from "./Button";

describe("buttom", () => {
    test('log clicks', () => {
        const { store } = renderWithProviders(<Button logId="testId">test</Button>);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(store.getState().stat.buttonClicks).toEqual({ testId: 1 });
        fireEvent.click(button);
        expect(store.getState().stat.buttonClicks).toEqual({ testId: 2 });
        fireEvent.click(button);
        expect(store.getState().stat.buttonClicks).toEqual({ testId: 3 });
    });
});