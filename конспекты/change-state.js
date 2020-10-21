text = 
'How to change state in Class Component'

text = 
'Beware! Do not change state directly!'
 + 'Always use setState()!';

class GoodFirstExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }

        this.handler = this.handler.bind(this);
    };

    handler() {
        setState({count: this.state.count + 1});
        text = 
        'Передаем объект с полями, которые хотим изменить, и новым значением.';
    }

    render() {
    return <button onChange={this.handler}>{count}</button>
    }
}

let link = [https://ru.reactjs.org/docs/react-component.html#setstate ,
    'About SetState work, callbacks and so on'];


class ExampleWithAsync extends React.Component {
    state = {
        count: 1,
        key: '123'
    }

    componentDidMount() {
        this.setState((previousState, props) => ({count: previousState.count + props.step}));
    }
}
