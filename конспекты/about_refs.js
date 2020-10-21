// Вариант 1: через React.createRef()
// В конструкторе

class ExampleComponent extends Component {
    constructor(props) {
      super(props);
      this.exampleRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.exampleRef.current);
    }

    render() {
      return <div ref={this.exampleRef} />;
    }
}

// Как поле класса

class ExampleComponent extends Component {
    exampleRef = React.createRef();
  
    componentDidMount() {
        console.log(this.exampleRef.current);
    }

    render() {
      return <div ref={this.exampleRef} />;
    }
}

// Вариант 2: Колл-беком

class CallbackRefExample extends Component {
    textInput = null;
  
    setTextInputRef = element => {
      this.textInput = element;
    };
  
    render() {
      // Используем колбэк в `ref`, чтобы сохранить ссылку на DOM-элемент
      // поля текстового ввода в поле экземпляра (например, this.textInput).
      return (
        <div>
          <input type="text" ref={this.setTextInputRef} />
        </div>
      );
    }
  }