import React from 'react'
import { Table } from 'antd'

export default function CommonTable(props) {
    console.log('table props: ', props)
    const { columns, dataSource, pagination } = props

    return (
        <>
            <Table size="middle" rowSelection={{ type: 'checkbox' }} rowKey={record => record.id} bordered={true} columns={columns} dataSource={dataSource}
                pagination={pagination} />
        </>
    )
}
