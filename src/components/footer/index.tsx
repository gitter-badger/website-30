import React from 'react'
import styles from './index.less';

interface Props {

}

const Index: React.FC<Props> = props => {
  return (
    <div className={styles.main}>
      <div>Copyright © 2020</div>
      京ICP备2020037966号-1
    </div>
  )
}

export default Index
