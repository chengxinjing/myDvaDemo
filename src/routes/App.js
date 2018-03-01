import {Link} from 'dva/router';
const  App =(props)=>{
  return(
    <div>
      <Link to ='/test/me'>asdad</Link>
      {props.children}
    </div>
  )
}
export default  App;
