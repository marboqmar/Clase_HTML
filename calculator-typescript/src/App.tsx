import { useState } from 'react';
import './App.css';

const actions: (string | number)[] = ['C', '+-', '%', '/', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];


function App() {
    const [value, setValue] = useState<string>('0');
    const [operation, setOperation] = useState<string>('');

    const calculate = () => {
        const numbers: string[] = value.split(operation);
        const num1: number = Number(numbers[0]);
        const num2: number = numbers[1] === '' || typeof numbers[1] === 'undefined' ? num1 : Number(numbers[1]);
        let result: number = 0;

        switch(operation){
            case 'x': {
                result = num1 * num2;
                break;
            }
            case '+': {
                result = num1 + num2;
                break;
            }
            case '-': {
                result = num1 - num2;
                break;
            }
            default: {
                result = num1 / num2;
                break;
            }
        }

        setValue(result.toString())
    }

    const handleClick = (actionClicked: any) => {
        switch(actionClicked){
            case 'C': {
                setValue('0');
                return;
            }
            case '+-': {
                setValue((Number(value) * -1).toString());
                return;
            }
            case '%': {
                setValue((Number(value) / 100).toString());
                return;
            }
            case '.': {
                if (value.includes('.')) {
                    return;
                } else {
                    setValue(value + actionClicked);
                    return;
                }
            }
            case '=': {
                setOperation('=')

                if (typeof operation === 'undefined' || operation === '=') {
                    return;
                }

                calculate();
                return;
            }
        }

        if (typeof actionClicked !== 'number') {
            const lastChar: string = value.slice(-1);
            setOperation(actionClicked);

            if (lastChar === operation) {
                const newValue: string = value.replace(lastChar, actionClicked);
                setValue(newValue);
                return;
            }

            setValue(value + actionClicked);

            return;
        }

        if (value === '0') {
            setValue(actionClicked.toString());
        } else {
            setValue(value + actionClicked);
        }
    }

    return (
      <>
        <div className={"mainContainer"}>
          <div className={"display"}>{value}</div>
          <div className={"buttonSet"}>
            {actions.map((action) => (
                <button key={action} onClick={() => handleClick(action)} className={"button"}>{action}</button>
            ))}
          </div>
        </div>
      </>
    );
}

export default App;
