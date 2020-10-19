import React, { useEffect } from 'react';
import styles from './index.less';
import Header from '@/components/header';
interface Props {}

const Index: React.FC<Props> = props => {
  useEffect(() => {}, []);

  return (
    <div className={styles.main}>
      <Header />
      <div>文章标题:title 文章内容:content 文章日期:2020-12-22 19:30</div>
      <div id="comment"></div>
    </div>
  );
};

export default Index;
