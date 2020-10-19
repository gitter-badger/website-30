import React, { useEffect } from 'react';
import styles from './index.less';
import Header from '@/components/header';
import 'gitalk/dist/gitalk.css';
import GitalkComponent from 'gitalk/dist/gitalk-component';
interface Props {}

const Index: React.FC<Props> = props => {
  useEffect(() => {
    // var gitalk = new Gitalk({
    //   clientID: 'f935013f0e2e5d101795',
    //   clientSecret: 'bdacad25920b3fa874344df6b27c711ca2f615fe',
    //   repo: 'comment',
    //   owner: 'katteXu',
    //   admin: ['GitHub repo owner and collaborators, only these guys can initialize github issues'],
    //   id: location.pathname,      // Ensure uniqueness and length less than 50
    //   distractionFreeMode: false  // Facebook-like distraction free mode
    // })
    // gitalk.render('gitalk-container')
  }, []);

  return (
    <div className={styles.main}>
      <Header />
      <div>文章标题:title 文章内容:content 文章日期:2020-12-22 19:30</div>
      <GitalkComponent
        options={{
          clientID: 'f935013f0e2e5d101795',
          clientSecret: 'bdacad25920b3fa874344df6b27c711ca2f615fe',
          repo: 'comment',
          owner: 'katteXu',
          admin: ['katteXu'],
          language: 'zh-CN',
        }}
      ></GitalkComponent>
    </div>
  );
};

export default Index;
