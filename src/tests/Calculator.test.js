import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add 1 and 4 and get 5', ()=>{
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const buttonAdd=container.getByTestId('operator-add');
    fireEvent.click(buttonAdd);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const equals = container.getByTestId('operator-equals')
    fireEvent.click(equals)
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('5');


  })

  it('should subtract 4 from 7 and get 3', ()=>{
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const buttonSubtract=container.getByTestId('operator-subtract');
    fireEvent.click(buttonSubtract);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const equals = container.getByTestId('operator-equals')
    fireEvent.click(equals)
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');


  })

  it('multiply 3 by 5 and get 15', ()=>{
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    const buttonMultiply=container.getByTestId('operator-multiply');
    fireEvent.click(buttonMultiply);
    const button5 = container.getByTestId('number5');
    fireEvent.click(button5);
    const equals = container.getByTestId('operator-equals')
    fireEvent.click(equals)
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('15');


  })

  it('divide 21 by 7 and get 3', ()=>{
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const buttonDivide=container.getByTestId('operator-divide');
    fireEvent.click(buttonDivide);
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const equals = container.getByTestId('operator-equals')
    fireEvent.click(equals)
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');


  })

  it('concatenate multiple number button clicks', ()=>{
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    fireEvent.click(button2);
    const equals = container.getByTestId('operator-equals')
    fireEvent.click(equals)
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('22');
    

  })

  it('chain multiple operations together', ()=>{
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const buttonDivide=container.getByTestId('operator-divide');
    fireEvent.click(buttonDivide);
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    const equalsone = container.getByTestId('operator-equals')
    fireEvent.click(equalsone)
    const buttonSubtract=container.getByTestId('operator-subtract');
    fireEvent.click(buttonSubtract);
    const button1again = container.getByTestId('number1');
    fireEvent.click(button1again);
    const equals = container.getByTestId('operator-equals')
    fireEvent.click(equals)
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('6');



  })

  it('clear the running total without affecting the calculation', ()=>{
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const buttonDivide=container.getByTestId('operator-divide');
    fireEvent.click(buttonDivide);
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    const equalsone = container.getByTestId('operator-equals')
    fireEvent.click(equalsone)
    const buttonSubtract=container.getByTestId('operator-subtract');
    fireEvent.click(buttonSubtract);
    const button1again = container.getByTestId('number1');
    fireEvent.click(button1again);
    const clear = container.getByTestId('clear')
    fireEvent.click(clear)
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('0');
    const buttonAdd=container.getByTestId('operator-add');
    fireEvent.click(buttonAdd);
    const button1againn = container.getByTestId('number1');
    fireEvent.click(button1againn);
    const equalsoneagain = container.getByTestId('operator-equals')
    fireEvent.click(equalsoneagain)
    const runningTotalagain = container.getByTestId('running-total');
    expect(runningTotalagain.textContent).toEqual('8');






  })

})






