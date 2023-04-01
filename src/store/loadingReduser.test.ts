import reducer, { errorLoad, loading, successLoad } from "./loadingReduser"

test("loading reduser", () => {
    let state = reducer(undefined, loading());
    expect(state).toEqual({ isLoading: true });

    state = reducer(state, successLoad('some value'));
    expect(state).toEqual({ isLoading: false, data: 'some value', error: undefined });

    state = reducer(state, loading());
    expect(state).toEqual({ isLoading: true });

    state = reducer(state, errorLoad('some error'));
    expect(state).toEqual({ isLoading: false, error: 'some error' });
})