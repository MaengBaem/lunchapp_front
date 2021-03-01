import { TEST } from "./type";

export const increseCount = count => ({ type: TEST, count });

const initalState = {
    test: 0
};

export default function (state = initalState, action) {
    switch (action.type) {
        case TEST:
            return { ...state, test: action.payload }

        default:
            return state;
    }
}