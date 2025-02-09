import { atom } from 'recoil';

export const countState = atom({
    key: 'countState',
    default: 0
});

export const timeState = atom({
    key: 'timeState',
    default: new Date().toLocaleTimeString()
})