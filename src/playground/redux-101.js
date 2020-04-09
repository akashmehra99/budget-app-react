
import { createStore } from 'redux';

const countReducer =((state = { count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
          return { count : state.count + action.value };
        case 'DECREMENT':
          return { count : state.count - action.value };
        case 'RESET' :
            return { count: 0 };
        default:
          return state;
      }
});

const store = createStore(countReducer);

const incrementCount = (value) => (
    {
        type: 'INCREMENT',
        value: value ? value : 1 
    }
);

const decrementCount = (value) => (
    {
        type: 'DECREMENT',
        value: value ? value : 1 
    }
);

const resetCount = (value) => (
    {
        type: 'RESET',
    }
);

store.subscribe(() => console.log(store.getState()));

store.dispatch(incrementCount(10));
// 1
store.dispatch(incrementCount());
// 2
store.dispatch(decrementCount(2));

store.dispatch(decrementCount());

store.dispatch(resetCount());