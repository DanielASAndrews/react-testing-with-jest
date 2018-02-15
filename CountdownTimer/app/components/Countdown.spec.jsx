import React from 'react';
import Countdown from 'Countdown';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';

jest.useFakeTimers();

describe('Countdown', () => {

    let countDown;

    beforeEach(() => {
        countDown = mount(<Countdown />);
    });

    afterEach(() => {
        countDown.unmount();
    });

    describe('handleSetCountdownTime()', () => {
        it('it should set countdown time and start countdown', () => {

            const actual = countDown.instance().handleSetCountdownTime(10);
            const expected = { count: 10, countdownStatus: 1 };

            expect(countDown.state().count).toEqual(expected.count);
            expect(countDown.state().countDownStatus).toEqual(expected.countDownStatus);

            jest.advanceTimersByTime(1000);

            expect(countDown.state().count).toEqual(9);
        });

        it('should never set countdown time to less than zero', () => {

            const actual = countDown.instance().handleSetCountdownTime(1);

            jest.advanceTimersByTime(3000);

            expect(countDown.state().count).toEqual(0);
        });
    });

    describe('render', () => {
        it('should always render Clock', () => {
            expect(countDown.find(Clock).length).toEqual(1);
        });
    });

    describe('render', () => {
        it('should always render CountdownForm', () => {
            expect(countDown.find(CountdownForm).length).toEqual(1);
        });
    });
});