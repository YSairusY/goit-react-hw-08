import React from 'react';
import s from './HomePage.module.css';
import DocumentTitle from '../../components/DocumentTitle';

const HomePage = () => {
  return (
    <div className={s.container}>
      <DocumentTitle>Home</DocumentTitle>
      <h1 className={s.title}>Welcome to Personal Contact Book!</h1>
      <p className={s.paragraph}>
        Sign up to get started! A simple way to store, manage, and access your
        contacts in one place.
      </p>
    </div>
  );
};

export default HomePage;
