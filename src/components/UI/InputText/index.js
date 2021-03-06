import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './input-text.module.scss';

class InputText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };
  }

  handleOnChange = (e) => {
    const { onChange } = this.props;
    e.persist();

    this.setState({
      value: e.target.value,
    }, () => {
      if (onChange) {
        onChange(e);
      }
    });
  };

  render() {
    const { onChange, className, ...otherProps } = this.props;
    const { value } = this.state;

    return (
      <input {...otherProps} className={cn(className, styles.inputText)} type="text" value={value} onChange={this.handleOnChange} />
    );
  }
}

InputText.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputText;
