import React from 'react'
import { Button, Popconfirm, Space } from 'antd'
import IconFont from '../../components/IconFont'

export default function index({ handleEdit, handleDelete }) {
    return (
        <Space>
            {/* 编辑按钮 */}
            <Button type="link" onClick={handleEdit} icon={<IconFont className="icon-font25" type="icon-hd-edit-circle" />} />
            {/* 删除按钮 */}
            <Popconfirm title="确定要删除吗？" okText="确定" cancelText="取消" onConfirm={handleDelete}>
                <Button type="link" icon={<IconFont className="icon-font25" type="icon-hd-delete-circle" />} />
            </Popconfirm>
        </Space>
    )
}
