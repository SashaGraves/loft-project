// 10. Recompose
// Итак, мы с вами посмотрели на HOC и render props как на способы абстракции определенных частей поведения в React. 
//  Такой подход позволяет разделять различные виды функционала (бизнес-логику, логику работы с API, логику работы с UI) на отдельные маленькие компоненты с 
// понятным поведением. Это удобно и позволяет иметь поддерживаемую архитектуру, однако скорее всего вам все же придется писать много стандартного повторяющегося кода.

// Библиотека Recompose решает эту проблему, предоставляя набор функций, которые которые позволяют комбинировать HOC'и.

// Внимание! С выходом React hooks библиотека Recompose во многом потеряла свою актуальность.

// Однако ознакомиться с Recompose всё же стоит – это позволит посмотреть на проблему, которую решают оба инструмента, под разными углами. 
// И Recompose, и хуки позволяют повторно использовать stateful бизнес-логику:
// хуки позволяют включать бизнес-логику в компонент;
// Recompose использует композицию функций.

// Рассмотрим следующий пример кода.


import React from "react";
import { withState, withHandlers, mapProps, pure, compose } from "recompose";

const Buttons = ({ buttons, toggleButton, selectedIndex }) => (
  <div>
    {buttons.map(index => (
      <button
        onClick={toggleButton}
        data-key={index}
        key={index}
        style={Object.assign(
          {},
          selectedIndex.includes(index) && {
            backgroundColor: "red"
          }
        )}
      >
        {index}
      </button>
    ))}
  </div>
);

const enhance = compose(
  withState("selectedIndex", "changeSelectedIndex", []),
  withState("buttons", "changeButtons", [":-)", ":-))", ":-("]),
  withHandlers({
    toggleButton: props => event => {
      const index = event.target.dataset.key;
      props.changeSelectedIndex(() => [index]);
    }
  }),

  mapProps(({ changeSelectedIndex, changeButtons, ...rest }) => rest),
  pure
);

export default enhance(Buttons);


// Здесь мы при помощи withState объявили геттер (selectedIndex) и сеттер (changeSelectedIndex). Эти переменные будут передаваться дальше при помощи props.

// Аналогичным образом обстоит дело с buttons и changeButtons.

// Затем мы добавили обработчик событий при помощи withHandlers, передав туда объект, ключами которого являются названия обработчиков, по которым они будут доступны в дальнейшем в props.

// Наконец, мы очистили props от лишних полей при помощи mapProps.