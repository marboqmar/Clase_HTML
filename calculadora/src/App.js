import './App.scss';
import { useState } from 'react';

const actions = ['C', '+-', '%', '/', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

const symbols = ['+', '-', 'x', '/', '%'];

function App() {
    const [value, setValue] = useState('0');

    const handleClick = (newValue) => {
        if (newValue === '.' && !value.includes('.')) {
            setValue(value + newValue);
            return;
        }

        if (newValue === 'C') {
            setValue('0');
            return;
        }

        if (newValue === '+-') {
            if (!value.startsWith('-')) {
                setValue(`-${value}`);
            } else {
                let positiveValue = value.split('-');
                setValue(positiveValue[1]);
            }
        }

        if (newValue === '+') {
            let checkLastDigit = value.split('')

            if (symbols.includes(checkLastDigit.slice(-1).toString())) {
                console.log('symbol not added')
            } else {
                setValue(`${value}+`)
            }
        }


        if (typeof newValue !== "number") {
            return;
        } else {
            if (value === '0') {
                setValue(newValue.toString());
            } else {
                setValue(value + newValue.toString());
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
