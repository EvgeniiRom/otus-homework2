import { loadingReduser } from "./loadingReduser"

test("loading reduser", () => {
    let state = loadingReduser(undefined, { type: 'LOADING' });
    expect(state).toEqual({ isLoading: true });
    state = loadingReduser(state, { type: 'SUCCESS', value: 'some value' });
    expect(state).toEqual({ isLoading: false, data: 'some value', error: undefined });
    state = loadingReduser(state, { type: 'LOADING' });
    expect(state).toEqual({ isLoading: true });
    state = loadingReduser(state, { type: 'ERROR', value: 'some error' });
    expect(state).toEqual({ isLoading: false, error: 'some error' });
})