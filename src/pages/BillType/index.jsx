import React, { useState, useEffect } from 'react'
import './index.less'
import billTypeAPI from '../../api/billType'
import constants from '../../util/constants'
import CommonTable from '../../components/Table'
import { Button, Space } from 'antd'
import IconFont from '../../components/IconFont'

// 获取账单类型列表
const getBillTypeInfo = async () => {
  let billTypeInfo = [];
  try {
    const result = await billTypeAPI.select({ pageIndex: 1, pageSize: constants.pageSizeDefault });
    if (result.data.code) {
      billTypeInfo = result.data.data;
    }
  } catch (error) {
    console.error('There has some error: ', error);
  }
  console.log('billTypeInfo', billTypeInfo)
  return billTypeInfo;
}


const columns = [
  {
    title: '类型',
    dataIndex: 'type',
    align: 'center',
    width: 200,
  },
  {
    title: '备注',
    dataIndex: 'note',
    align: 'center',
  },
  {
    title: '操作',
    dataIndex: 'action',
    align: 'center',
    width: 200,
    render: () => (
      <Space>
        <Button type="link" icon={<IconFont className="bill-type-action-icon" type="icon-hd-edit-circle" />} />
        <Button type="link" icon={<IconFont className="bill-type-action-icon" type="icon-hd-delete-circle" />} />
      </Space>
    ),
  }
]

export default function BillType() {

  // 账单类型
  const [billTypeInfo, setbillTypeInfo] = useState([])

  // 初始化账单列表
  useEffect(() => {
    getBillTypeInfo().then((data) => {
      setbillTypeInfo(data);
    })
  }, []);
  
  const pagination = {
    total:billTypeInfo.total,
    hideOnSinglePage:true,
    pageSize:constants.pageSizeDefault,
    defaultPageSize:constants.pageSizeDefault,
  }

  return (
    <div>
      <CommonTable size="middle" columns={columns} dataSource={billTypeInfo.list} pagination={pagination}/>
    </div>
  )
}
