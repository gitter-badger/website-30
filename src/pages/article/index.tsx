import React, { useEffect } from 'react';
import styles from './index.less';
import Header from '@/components/header';
import Comment from '@/components/comment';
interface Props {}

const Index: React.FC<Props> = props => {
  useEffect(() => {}, []);

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.article}>
        <p>
          文章页面,文章页面,文章页面,文章页面,文章页面,文章页面,文章页面,文章页面,文章页面,文章页面,文章页面,文章页面,文章页面,文章页面,文章页面,文章页面,文章页面,文章页面,文章页面,文章页面
          文章页面,文章页面,文章页面,文章页面,文章页面,文章页面,文章页面,文章页面,文章页面,文章页面,文章页面,文章页面,文章页面,文章页面,文章页面,文章页面,文章页面,文章页面,文章页面,文章页面
        </p>
      </div>
      <div className={styles.comment}>
        <Comment />
      </div>
    </div>
  );
};

export default Index;
