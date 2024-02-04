import { useState } from 'react';
import './App.css';

const actions: (string | number)[] = ['C', '+-', '%', '/', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

function App() {
  const [value, setValue] = useState<string>('0');

  const handleClick = (actionClicked: any) => {

      if (actionClicked === '.' && !value.includes('.')) {
          setValue(value + actionClicked);
          return;
      }

      if (actionClicked === 'C') {
          setValue('0');
          return;
      }

      if (actionClicked === '+-') {
          setValue((Number(value) * -1).toString());
          return;
      }

      if (actionClicked === '%') {
          setValue((Number(value) / 100).toString());
          return;
      }

      if (typeof actionClicked !== 'number') {
          return;
      } else {
          if (value === '0') {
              setValue(actionClicked.toString());
          } else {
              setValue(value + actionClicked.toString())
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
