class ModalWindow extends Component {
    render() {
      return ReactDOM.createPortal(this.props.children, this.props.domNode);
    }
  }
  
  class App extends Component {
    render() {
      return (
        <ModalWindow domNode={document.querySelector("#modal")}>
          <p>It is modal window</p>
        </ModalWindow>
      );
    }
  }