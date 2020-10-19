import React, { useEffect } from 'react';
import styles from './index.less';
import Header from '@/components/header';
import 'gitment/style/default.css';
import Gitment from 'gitment';
interface Props {}

const Index: React.FC<Props> = props => {
  useEffect(() => {
    const myTheme = {
      render(state, instance) {
        const container = document.createElement('div');
        container.lang = 'en-US';
        container.className = 'gitment-container gitment-root-container';

        // your custom component
        container.appendChild(instance.renderSomething(state, instance));

        container.appendChild(instance.renderHeader(state, instance));
        container.appendChild(instance.renderEditor(state, instance));
        container.appendChild(instance.renderComments(state, instance));
        container.appendChild(instance.renderFooter(state, instance));
        return container;
      },
      renderSomething(state, instance) {
        const container = document.createElement('div');
        container.lang = 'en-US';
        if (state.user.login) {
          container.innerText = `Hello, ${state.user.login}`;
        }
        return container;
      },
    };
    const gitment = new Gitment({
      owner: 'katteXu',
      repo: 'comment',
      oauth: {
        client_id: 'f935013f0e2e5d101795',
        client_secret: 'bdacad25920b3fa874344df6b27c711ca2f615fe',
      },
      myTheme,
    });

    gitment.render('comment');
  }, []);

  return (
    <div className={styles.main}>
      <Header />
      <div>文章标题:title 文章内容:content 文章日期:2020-12-22 19:30</div>
      <div id="comment"></div>
    </div>
  );
};

export default Index;
