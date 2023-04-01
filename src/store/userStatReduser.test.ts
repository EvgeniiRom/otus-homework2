import { userStatReduser } from './userStatReduser';
test("loading reduser", () => {
    let state = userStatReduser(undefined, { type: 'LOGIN', value: 'myname' });
    expect(state).toEqual({login: true, name: 'myname', buttonClicks: {}})
    
    state = userStatReduser(state, { type: 'CLICK', value: 'button1' });
    expect(state).toEqual({login: true, name: 'myname', buttonClicks: {button1: 1}})
    
    state = userStatReduser(state, { type: 'CLICK', value: 'button2' });
    expect(state).toEqual({login: true, name: 'myname', buttonClicks: {button1: 1, button2: 1}})
    
    state = userStatReduser(state, { type: 'CLICK', value: 'button1' });
    state = userStatReduser(state, { type: 'CLICK', value: 'button1' });
    expect(state).toEqual({login: true, name: 'myname', buttonClicks: {button1: 3, button2: 1}})
    
    state = userStatReduser(state, { type: 'LOGOUT', value: 'myname' });
    expect(state).toEqual({login: false, buttonClicks: {}})
})