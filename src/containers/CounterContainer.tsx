import React from 'react';
import Counter from '../components/Counter';
import { RootState } from '../modules';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, increaseBy } from '../modules/counter';

function CounterContainer() {
    const count = useSelector((state:RootState) => state.counter.count);
    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increase());
    }

    const onDecrease = () => {
        dispatch(decrease());
    }

    const onIncreaseBy = (diff: number) => {
        dispatch(increaseBy(diff));
    }

    return (
        <Counter
            count = {count}
            onIncrease = {onIncrease}
            onDecrease = {onDecrease}
            onIncreaseBy = {onIncreaseBy}
        />
    );
}

export default CounterContainer