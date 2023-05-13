import React from 'react';
import { Logo } from '../Components/EmptyComponent/EmptyComponent';

import './styles/header.css';

export function AppHeader() {
  return (
    <header>
      <div>
        <Logo />
        {/* <Logo></Logo> */}
        <div className="header-title">Tytuł nagłówka</div>
      </div>
    </header>
  );
}
