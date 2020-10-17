import React from 'react'
import styles from './index.less';
import { Avatar } from "antd";
interface Props {
  type?: number,
  icon?: any,
  message?: string
}

const Index: React.FC<Props> = props => {

  return (
    <div className={styles.main}>
      <div className={styles['user-icon']}>
        <Avatar style={{ verticalAlign: 'middle', backgroundColor: '#00101f', fontWeight: 600 }} size="large" >
          Tom
        </Avatar>
      </div>
      <div className={styles['message-body']}>
        <div className={styles['message-header']}>
          Tom <span className={styles['message-date']}>2012-12-22 12:54</span>
        </div>
        <div className={styles['message-content']}>
          内容会计师的离开福建烤老鼠大姐夫类库圣诞节快乐父节点丝扣法兰 <br />
          内容会计师的离开福建烤老鼠大姐夫类库圣诞节快乐父节点丝扣法兰 <br />
          内容会计师的离开福建烤老鼠大姐夫类库圣诞节快乐父节点丝扣法兰 <br />
          内容会计师的离开福建烤老鼠大姐夫类库圣诞节快乐父节点丝扣法兰 <br />
          内容会计师的离开福建烤老鼠大姐夫类库圣诞节快乐父节点丝扣法兰 <br />
          内容会计师的离开福建烤老鼠大姐夫类库圣诞节快乐父节点丝扣法兰 <br />
          内容会计师的离开福建烤老鼠大姐夫类库圣诞节快乐父节点丝扣法兰 <br />
        </div>
      </div>
    </div>
  )
}

export default Index
