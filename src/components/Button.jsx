import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, onClick, to, href, type = 'button', className, backgroundColor }) => {
  const buttonStyles = {
    paddingTop: '11px',
    paddingBottom: '11px',
    paddingLeft: '35px',
    paddingRight: '35px',
    zIndex: 20,
    position: 'relative',
    fontWeight: '800',
    borderRadius: '5px',
    marginTop: '0',
    marginBottom: '0',
    marginLeft: '15px',
    marginRight: '15px',
  };

  if (to) {
    return (
      <Link to={to} style={{ textDecoration: 'none' }}>
        <button type={type} style={buttonStyles} className={`btn-1 ${className}`}>{text}</button>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
        <button type={type} style={buttonStyles} className={`btn-1 ${className}`}>{text}</button>
      </a>
    );
  }

  return <button onClick={onClick} type={type} style={buttonStyles} className={`${className}`}>{text}</button>;
};

export default Button;