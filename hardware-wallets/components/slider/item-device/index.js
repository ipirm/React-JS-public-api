import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './styles.css';

export default class IconDevice extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    image: PropTypes.string,
    isActive: PropTypes.bool,
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.onClick(event);
  }

  render() {
    const { isActive, image } = this.props;
    return (
      <div onClick={this.handleClick} className={cn(styles.link, { [styles.isActive]: isActive })}>
        <img src={image} alt="" />
      </div>
    );
  }
}
