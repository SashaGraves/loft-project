class WrongExample {
    state = {
        count: 1,
    }

    increment(e) {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return <button onClick={this.increment}>Click me</button>;
    }
}


class RightExample {
    state = {
        count: 1,
    }

    increment = () => this.setState({count: this.state.count + 1});

    render() {
        return <button onClick={this.increment}>Click me</button>;
    }
}

// какие методы писать в теле класса?  любыеЮ, или только реактовские