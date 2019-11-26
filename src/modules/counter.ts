import { createAction, ActionType, createReducer } from 'typesafe-actions'

// 액션 타입
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

// 액션 생성 함수
export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
export const increaseBy = createAction(INCREASE_BY)<number>();

type CounterState = {
    count: number;
};

const initialState: CounterState = {
    count: 0
};

const actions = { increase, decrease, increaseBy };
type CounterAction = ActionType<typeof actions>;

// 리듀서

// 오브젝트 맵 방식
// const counter = createReducer<CounterState, CounterAction>(initialState, {
//     [INCREASE]: state => ({ count: state.count + 1}),
//     [DECREASE]: state => ({ count: state.count - 1}),
//     [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload})
// });


// 메서드 체이닝 방식
const counter = createReducer<CounterState, CounterAction>(initialState)
    .handleAction(increase, state => ({ count: state.count + 1}))
    .handleAction(decrease, state => ({ count: state.count - 1}))
    .handleAction(increaseBy, (state, action) => ({ 
        count: state.count + action.payload
    }));



// function counter(state: CounterState = initialState, action: CounterAction): CounterState {
//     switch (action.type) {
//         case INCREASE:
//             return { count: state.count + 1}
//         case DECREASE:
//             return { count: state.count - 1 }
//         case INCREASE_BY:
//             return { count: state.count + action.payload }
//         default:
//             return state;
//     }
// }

export default counter;