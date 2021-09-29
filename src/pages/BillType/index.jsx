import React, { useState, useEffect } from 'react'
import { message } from 'antd'
import './index.less'
import billTypeAPI from '../../api/billType'
import constants from '../../util/constants'
import CommonTable from '../../components/Table'
import TableOperateButton from '../../components/TableOperateButton'

// 获取账单类型列表
const getBillTypeInfo = async (pageInfo) => {
  let billTypeInfo = [];
  try {
    const result = await billTypeAPI.select(pageInfo);
    if (result.data.code) {
      billTypeInfo = result.data.data;
    }
  } catch (error) {
    console.error('There has some error: ', error);
  }
  console.log('billTypeInfo', billTypeInfo)
  return billTypeInfo;
}

// 编辑账单类型
const editBillType = () => {
  console.log('edit bill type')
}

// 删除账单类型
const deleteBillType = async idList => {
  console.log('删除')
  try {
    const result = await billTypeAPI.delete({ idList });
    if (result.data.code) {
      message.success('删除成功')

    } else {
      message.warning(result.data.message ? result.data.message : '删除出现错误')
    }
  } catch (error) {
    console.log('There has some error: ', error)
  }
}

// 删除单个账单类型
const deleteSingleBillType = async record => {
  await deleteBillType([record.id])
}

// Table列信息
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
    render: (_, record) => (
      <TableOperateButton handleEdit={editBillType} handleDelete={() => deleteSingleBillType(record)} />
    ),
  }
]

export default function BillType() {

  // 分页切换时的事件
  const pageSizeChange = async (page, pageSize) => {
    console.log(`PageSizeChange: page:${page}, pageSize:${pageSize}`)
    const data = await getBillTypeInfo({ pageIndex: page, pageSize });
    setbillTypeInfo(data);
  }

  // 账单类型
  const [billTypeInfo, setbillTypeInfo] = useState([])

  // 初始化账单列表
  useEffect(() => {
    getBillTypeInfo({ pageIndex: 1, pageSize: constants.pageSizeDefault }).then((data) => {
      setbillTypeInfo(data);
    })
  }, []);

  const pagination = {
    total: billTypeInfo.total,
    hideOnSinglePage: true,
    pageSize: constants.pageSizeDefault,
    defaultPageSize: constants.pageSizeDefault,
    onChange: pageSizeChange,
  }

  return (
    <div>
      <CommonTable size="middle" onChange={pageSizeChange} columns={columns} dataSource={billTypeInfo.list} pagination={pagination} />
    </div>
  )
}
