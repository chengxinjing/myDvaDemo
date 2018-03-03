import LoginForm from '../../components/login/LoginForm';
import {connect} from 'dva'
const Login =(props)=>{

 const handleInput =(form)=>{
   const {dispatch} = props;
   const {validateFieldsAndScroll} = form;
   validateFieldsAndScroll((error,values)=>{
     if(!error){
       dispatch({
         type:'login/login',
         payload:values
       })
     }
   })
 }
  return(
    <LoginForm handleInput ={handleInput}/>
  )
}
export default connect()(Login)
