import React,{useRef,useState} from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function App() {
  const [inputs, setInputs]=useState({
    username:'',
    email:'',
  })
  const {username,email}=inputs
  const onChange = e =>{
    const {name,value} = e.target
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const [users,setUsers] = useState([
      {
          id:1,
          username: 'touchup',
          email: 'touchup1479@gmail.com'
      },
      {
          id:2,
          username: 'tester',
          email: 'test@example.com'
      },
      {
          id:3,
          username: 'liz',
          email: 'liz@example.com'
      }
  ])

  

  const nextId = useRef(4)

  const onCreate = () => {
    const user={
      id:nextId.current,
      username,
      email,
    }
    setUsers([/*...users,user*/users.concat(user)])
    setInputs({
      username:'',
      email:''
    })

    console.log(nextId.current)
    nextId.current += 1
  }

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users}/>
    </>
  )
}

export default App;
