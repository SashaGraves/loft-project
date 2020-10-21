const { Provider, Consumer } = React.createContext(defaultValue);


// defaultvalue используется только в том случае, если Consumer находится _вне_ Провайдера!
// Если Консьюмер _внутри_ Провайдера, но Провайдер ничего не передает - default value использоваться не будет. В результате просто появится ошибка.

const { Provider, Consumer } = React.createContext({ background: "#eee" });

const Root = () => (
    <div>
        <Provider value={{background: "#000"}}>
            <IntermediateComponent>
            <ThemedButton />
            </IntermediateComponent>
        </Provider>
        <ThemedButton />  // Вот здесь сработает дефолтное значение
    </div>
);

const ThemedButton = () => (
  <Consumer>     
    {({ background }) => ( // внутри Consumer - функция, рендер-пропс. Она принимает значение из Провайдера в качестве аргрумента и возвращает компонент с этим пропсом
      <button style={{ background: background }}>Кнопка</button>
    )}
  </Consumer>
);