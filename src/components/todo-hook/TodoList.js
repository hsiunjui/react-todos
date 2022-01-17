import React, { useState } from 'react'
import { Input, Row, Col,  Layout, Button, List, Typography } from 'antd';


function TodoList() {
    const [ list, setList ] = useState([11])
    const [ value, setValue ] = useState('')
    return (
        <Layout>
            <Row>
                <Col span={12}>
                    <Input placeholder="Basic usage" value={value} onChange={(e) => setValue(change(e))}/>
                </Col>
                <Col>
                    <Button type="primary"onClick={() => setList(getNewValue(list, value))}>提交</Button>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <List header={<div>List Items:</div>} bordered
                        dataSource={list}
                        renderItem={item => (
                            <List.Item>
                                <Typography.Text mark> {item} </Typography.Text>
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </Layout>
    )
}

function change(e) {
    console.log(e)
    const { value } = e.target
    return value
}

function getNewValue(list, value) {
    let newList = JSON.parse(JSON.stringify(list))
    newList.push(value)
    return newList
}

export default TodoList