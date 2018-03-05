import {Table, Button, Modal, Icon, Input, Form, Col, Row, DatePicker,Divider} from 'antd';
import {connect} from 'dva'
import React from 'react'
import styles from './index.css'
const Mock = require('mockjs')
const data = Mock.mock({
  'DataSource|25': [{
    'key|+1': 1,
    'customerName': '@string',
    'contractNo|1-2': '@integer',
    'update': '@date',
    'operation':''
  }]
})
let dataSource = data.DataSource;
const columns = [{
  title: '序号',
  key: '序号',
  dataIndex: 'key'
},
  {
    title: '合同编号',
    key: '合同编号',
    dataIndex: 'contractNo'
  }, {
    title: '客户姓名',
    key: '客户姓名',
    dataIndex: 'customerName'
  }, {
    title: '更新日期',
    key: '更新日期',
    dataIndex: 'update'
  },{
  title:'操作',
    key:'操作',
    render:(text,record)=>{
    return(
      <div>
        <a href="#">修改</a>
        <Divider type="vertical"/>
        <a href="#">删除</a>
      </div>

    )
    }
  }]
class Show extends React.Component {
  state = {
    visible: false,
    DataSource: dataSource,
  }
  showModel = () => {
    this.setState({
      visible: true
    })
  }

  handleOk = () => {
    const {getFieldsValue, validateFields, resetFields} = this.props.form;
    validateFields(error => {
      if (error) {
        return
      }
      const oneCase = getFieldsValue();
      oneCase.key = dataSource.length + 1;
      oneCase.update = oneCase.update.format('YYYY-MM-DD')
      dataSource.push(oneCase)
      resetFields();
      this.setState({
        visible: false
      })
    })
  }
  searchOk = (value) => {
    let DataSource = dataSource.filter(_ => _.customerName.includes(value));
    let i = 1;
    for (let data of DataSource) {
      data.key = i
      i++;
    }
    this.setState({
      DataSource: DataSource
    })
  }
  handleCancel = () => {
    const {resetFields} = this.props.form;
    resetFields()
    this.setState({
      visible: false
    })
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div>
        <div className={styles.search}>
          <Form>
            <Form.Item>
              <Row>
                <Col span={16}>
                  <Input.Search enterButton={(<span><Icon type="search"/>查询</span>)} addonBefore='客户姓名:'
                                placeholder="输入客户姓名" id="custerName" onSearch={this.searchOk}/>
                </Col>
              </Row>
            </Form.Item>
          </Form>
        </div>
        <Button type='primary' onClick={this.showModel}>createNew</Button>
        <Modal title='添加' okText='提交' cancelText='取消' visible={this.state.visible} onCancel={this.handleCancel}
               onOk={this.handleOk}>
          <Form >
            <Form.Item>
              {getFieldDecorator('contractNo', {
                rules: [{
                  required: true
                }]
              })(<Input type="text" addonBefore='合同编号:'/>)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('customerName', {
                rules: [{
                  required: true
                }]
              })(<Input type="text" addonBefore='客户姓名:'/>)}
            </Form.Item>
            <Form.Item>
              <label>更新时间:</label>{getFieldDecorator('update', {
              rules: [{
                required: true
              }]
            })(<DatePicker format="YYYY-MM-DD"/>)}

            </Form.Item>
          </Form>
        </Modal>

        <Table  dataSource={this.state.DataSource}  columns={columns}/>
      </div>
    )
  }
}
export  default connect(({loading}) => ({loading}))(Form.create()(Show));
