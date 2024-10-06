import React ,{
  useEffect,
  useState
} from 'react'
import { Space,Table } from 'antd';
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import {  getUsers } from '../../redux/slices/userSlice.js'
export default function Users() {
  // const [usersData,setUsersData] = useState([])
  const [isDataLoaded,setIsDataLoaded] = useState(false)
  const users = useSelector((state) => state.users.usersList)
  const dispatch = useDispatch()

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    //  render: (text) => <a>{text}</a>,
    },
    {
      title: 'User Name',
      dataIndex: 'username',
      key: 'username',
    },
        {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/app/user/${record.id}`}>View Details</Link>
        </Space>
      ),
    },
    // {
    //   title: 'Age',
    //   dataIndex: 'age',
    //   key: 'age',
    //   render: (text) => <a>{text}</a>,
    // },
    // {
    //   title: 'Address',
    //   dataIndex: 'address',
    //   key: 'address',
    // },
    // {
    //   title: 'Tags',
    //   key: 'tags',
    //   dataIndex: 'tags',
    //   render: (_, { tags }) => (
    //     <>
    //       {tags.map((tag) => {
    //         let color = tag.length > 5 ? 'geekblue' : 'green';
    //         if (tag === 'loser') {
    //           color = 'volcano';
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },

  ];
  // const data = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //     tags: ['nice', 'developer'],
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park',
  //     tags: ['loser'],
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sydney No. 1 Lake Park',
  //     tags: ['cool', 'teacher'],
  //   },
  // ];

  useEffect(()=>{
   // setIsDataLoaded(true)
   dispatch(getUsers())
  },[])


//   {
//     id:1,
//     email:'John@gmail.com',
//     username:'johnd',
//     password:'m38rmF$',
//     name:{
//         firstname:'John',
//         lastname:'Doe'
//     },
//     address:{
//         city:'kilcoole',
//         street:'7835 new road',
//         number:3,
//         zipcode:'12926-3874',
//         geolocation:{
//             lat:'-37.3159',
//             long:'81.1496'
//         }
//     },
//     phone:'1-570-236-7033'
// },
  return (
    <div>
        <h2>Users</h2>
        <Table columns={columns} dataSource={users} loading={isDataLoaded} />
    </div>
  )
}
