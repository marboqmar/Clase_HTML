import './App.scss';
import { useState } from 'react';

const actions = ['C', '+-', '%', '/', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];


function App() {
    const [value, setValue] = useState('0');
    const [operation, setOperation] = useState();

    const calculate = () => {
        const numbers = value.split(operation);
        const num1 = Number(numbers[0]);
        const num2 = !numbers[1] ? num1 : Number(numbers[1]);
        let result;

        switch (operation) {
            case 'X':
                result = num1 * num2;
                break;
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            default:
                result = num1 / num2;
        }

        setValue(result.toString())
    }

    const handleClick = (actionClicked) => {
        if (actionClicked === '.' && !value.includes('.')) {
            setValue(value + actionClicked);
            return;
        }

        if (actionClicked === 'C') {
            setValue('0');
            return;
        }

        if (actionClicked === '+-') {
            setValue((value * -1).toString());
            return;
        }

        if (actionClicked === '%') {
            setValue((value / 100).toString())
        }

        if (actionClicked === '=') {
            setOperation('=');
            if (typeof operation === 'undefined' || operation === '=') {
                return;
            }
            calculate();
            return;
        }



        if (typeof actionClicked !== "number") {
            const lastChar = value.slice(-1);
            setOperation(actionClicked);

            if (lastChar === operation) {
                const newValue = value.replace(lastChar, actionClicked);
                setValue(newValue);
                return;
            }

            setValue(value + actionClicked);
        } else {
            if (value === '0') {
                setValue(actionClicked.toString());
            } else {
                setValue(value + actionClicked.toString());
            }
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