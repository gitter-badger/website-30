import React from 'react';
import styles from './index.less';

import Header from '@/components/header';
import Login from '@/components/login';
import Footer from '@/components/footer'
import { history } from 'umi';
interface Props {

}

const Index: React.FC<Props> = props => {

  const handleToLogin = () => {
    history.push('/login');
  }
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles['login-block']}>
        <Login />
      </div>
      <Footer />
    </div>
  )
}

export default Index;



