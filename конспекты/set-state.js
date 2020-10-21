let text = 
    'How to define state'

class First extends React.Component {
    constructor(props) {
        super(props); 
        
        text = ('Это нужно для того, чтобы props был доступен внутри конструктора по слову this.' 
            + 'В остальным местах props доступен и так. Но чтобы код был единообразным,'
            + ' лучше везде передавать props  в конструктор. Избавляет от путаницы.');
        
        this.state = {
            count: 1,
            something: 'SomeThing'
        };
    }

    render() {
    return (<div>{this.state.count}</div>);
    }

}


class Second extends React.Component {
    text = 
        'Выставляем state как поле класса. Без конструктора вообще'
    
    state = {
        count: 1,
    }

    render() {
    return (<div>{this.state.count}</div>);
    }
}
    
