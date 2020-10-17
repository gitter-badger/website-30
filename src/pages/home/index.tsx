import React from 'react';
import styles from './index.less';
import Header from '@/components/header';
import ChartApp from '@/components/chat-app';
interface Props {

}

const Index: React.FC<Props> = props => {

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles['chat-block']}>
        <ChartApp data={[]} />
      </div>
    </div>
  )
}

export default Index;



