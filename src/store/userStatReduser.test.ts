import reducer, { buttonClick, login, logout } from './userStatReduser';
test("loading reduser", () => {
    let state = reducer(undefined, login('myname'));
    expect(state).toEqual({ login: true, name: 'myname', buttonClicks: {} })

    state = reducer(state, buttonClick('button1'));
    expect(state).toEqual({ login: true, name: 'myname', buttonClicks: { button1: 1 } })

    state = reducer(state, buttonClick('button2'));
    expect(state).toEqual({ login: true, name: 'myname', buttonClicks: { button1: 1, button2: 1 } })

    state = reducer(state, buttonClick('button1'));
    state = reducer(state, buttonClick('button1'));
    expect(state).toEqual({ login: true, name: 'myname', buttonClicks: { button1: 3, button2: 1 } })

    state = reducer(state, logout());
    expect(state).toEqual({ login: false, buttonClicks: {} })
})