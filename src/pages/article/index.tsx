import React, { useEffect } from 'react';
import styles from './index.less';
import Header from '@/components/header';
import 'gitalk/dist/gitalk.css';
import GitalkComponent from 'gitalk/dist/gitalk-component';
interface Props {}

const Index: React.FC<Props> = props => {
  useEffect(() => {}, []);

  return (
    <div className={styles.main}>
      <Header />
      <div>文章标题:title 文章内容:content 文章日期:2020-12-22 19:30</div>
      <div className={styles.article}>
        <GitalkComponent
          options={{
            clientID: 'f935013f0e2e5d101795',
            clientSecret: 'bdacad25920b3fa874344df6b27c711ca2f615fe',
            repo: 'website',
            owner: 'katteXu',
            admin: ['katteXu'],
            language: 'zh-CN',
          }}
        />
      </div>
    </div>
  );
};

export default Index;
