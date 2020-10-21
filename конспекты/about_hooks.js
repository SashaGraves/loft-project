import React, { useState } from "react";

const StateExample = () => {
  // Объявление переменной состояния, которую мы назовём "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Вы кликнули {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
    </div>
  );
};


import React, { useState, useEffect } from "react";

const EffectExample = () => {
  const [count, setCount] = useState(0);

  // useEffect будет вызываться при каждом рендере
  // его использование аналогично componentDidMount
  // и componentDidUpdate:
  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    document.title = `Вы нажали ${count} раз`;
  }, []);

// Если нужно, чтобы useEffect выполнился только один раз для имитации поведения componentDidMount,
//  то можно передать в качестве второго аргумента пустой массив.

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
    </div>
  );
};



import React, { useState, useEffect } from "react";

const EffectExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
      // какой-то код

      return () => {
          // Этот о\коллбек работает на ComponentWillUnmount. 
          // Здесь можно убрать интервалы, отписаться от событий и тд.
      }
  });

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
    </div>
  );
};