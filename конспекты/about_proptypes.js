// Способ подходит для классовых и функциональных компонентов

import PropTypes from "prop-types";
import React from "react";

const Greeting = ({ name }) => <p>Hi, {name}!</p>;

Greeting.propTypes = {
  name: PropTypes.string.isRequired
};

// Способ для классовых компонентов - создание статичного поля класса

import PropTypes from "prop-types";
import React, { Component } from "react";

class ClassWithPropTypes extends Component {
  static propTypes = {
    email: PropTypes.string
  };

  static defaultProps = {
    name: "anonymous"
  };

  render() {
    const { email } = this.props;
    return <p>Email: {email}</p>;
  }
}

// другой вариант задать деволтные пропсы. А заодно задать объект как пропс

Child.propTypes = {
    person: PropTypes.shape({
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      age: PropTypes.number,
    }).isRequired,
  };
  
  Child.defaultProps = {
    isTeacher: true,
    age: 42
  };