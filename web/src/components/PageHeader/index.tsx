import React from 'react';
import { Link } from 'react-router-dom'

import './styles.css'

import backIcon from '../../assets/icon/back.svg';
import logoImg from '../../assets/image/logo.svg';


interface PageaheaderProps {
  title: string;
}

const PageHeader: React.FC<PageaheaderProps> = (props) => {
  return (
    <header className="page-header">

      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        <p>{props.children}</p>
      </div>

    </header>
  );
}

export default PageHeader