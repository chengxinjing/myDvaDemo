import {Form,Input,Button,Icon,Checkbox} from 'antd';
import  styles from './LoginForm.css';
const  LoginForm =(props)=>{
 const handleOk = ()=>{
     props.handleInput(props.form);
  }
  const FormItem = Form.Item;
  const {getFieldDecorator } = props.form;
  return(
    <div>
      <Form  className={styles.login_form}>
        <FormItem hasFeedback>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} onPressEnter={handleOk} placeholder="Username" />
          )}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} onPressEnter={handleOk} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className={styles.login_form_forgot} href="">Forgot password</a>
          <Button type="primary" onClick={handleOk} className={styles.login_form_button}>
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    </div>
  )
}
export default Form.create()(LoginForm);
