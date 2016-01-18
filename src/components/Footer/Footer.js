import React from 'react';
import { Link } from 'react-router';
import cx from 'classnames';

import styles from './Footer.css';

const Footer = () => (
  <footer className={styles.root}>
    <Link
      to={'about'}
      className={cx(styles.nav, styles.resetA)}
      activeClassName={cx(styles.activeNav, styles.resetA)}
    >
      About
    </Link>
    <a
      href="https://github.com/keyanzhang/repo.cat"
      target="_blank"
    >
      Source on GitHub
    </a>
  </footer>
);

export default Footer;
