import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { ConfigProvider, DatePicker, message } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'antd/dist/antd.css';

moment.locale('zh-cn');

function App() {
  const [date, setDate] = useState(null);
  const handleChange = (value:any) => {
    message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
    setDate(value);
  };
  return (
    <div className="App">
      <div>sadf</div>
      {/* <Button>hello</Button>
      <Row></Row> */}
      {/* <Button>hello,world</Button> */}
      <ConfigProvider locale={zhCN}>
        <div style={{ width: 400, margin: '100px auto' }}>
          <DatePicker onChange={handleChange} />
          <div style={{ marginTop: 16 }}>
            {/* 当前日期：{date ? date.format('YYYY年MM月DD日') : '未选择'}                                                            */}
          </div>
        </div>
      </ConfigProvider>
    </div> 
  );
}



export default App;
