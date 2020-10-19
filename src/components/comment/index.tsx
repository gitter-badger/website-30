import React, { useEffect } from 'react';
import 'gitalk/dist/gitalk.css';
import { dynamic } from 'umi';

interface Props {}

const Comment: any = dynamic({
  loader: async () => {
    const { default: GitalkComponent } = await import(
      'gitalk/dist/gitalk-component'
    );
    return GitalkComponent;
  },
});

const Index: React.FC<Props> = props => {
  return (
    <Comment
      options={{
        clientID: 'f935013f0e2e5d101795',
        clientSecret: 'bdacad25920b3fa874344df6b27c711ca2f615fe',
        repo: 'website',
        owner: 'katteXu',
        admin: ['katteXu'],
        language: 'zh-CN',
      }}
    />
  );
};

export default Index;
