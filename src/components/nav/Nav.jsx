
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../images/Logo.svg';
import hireMe from '../../images/Hire Me.png';
import './Nav.css';

const Nav = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <img src={logo} alt="logo"/>
        <img id="hireMe" src={hireMe} alt="hireMe"/>
      </div>
      <div className='navbar__language'>
        <label htmlFor="language-select"></label>
        <select id="language-select" onChange={handleLanguageChange} defaultValue={i18n.language}>
          <option value="en">Eng</option>
          <option value="uz">Uz</option>
          <option value="ru">Ru</option>
        </select>
      </div>
      <div className='navbar__links'>
        
        <Link to="/">{t('portfolio')}</Link>
        <Link to="/blog">{t('blog')}</Link>
        <Link to="/cv">{t('cv')}</Link>
        <Link to="/store">{t('store')}</Link>
        <Link to="/freelance">{t('freelance')}</Link>
        <Link to="/about">{t('about')}</Link>
        <Link to="/contact">{t('contact')}</Link>
      </div>
      
    </div>
  );
}

export default Nav;
