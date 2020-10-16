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
        <div className={styles.title}>
          Code Debug
           <div className={styles['sub-title']}>
            Code Debug 是程序调试，交流技术的快捷平台
           </div>
        </div>
        <Login />
      </div>
      <Footer />
    </div>
  )
}

export default Index;



