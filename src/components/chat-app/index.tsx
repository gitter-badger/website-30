import React, { useState, useCallback } from 'react'
import styles from './index.less';
import Item from './chat-item';
import { Input } from "antd";
interface Props {
  data: any
}

const Index: React.FC<Props> = props => {
  const { data } = props;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
  }


  return (
    <div className={styles.main}>
      <div>
        <Item />
        <Item />
        <Item />
      </div>
      <Input.TextArea  onChange={handleChange} autoSize={{ minRows: 3 }} />
    </div>
  )
}

export default Index
