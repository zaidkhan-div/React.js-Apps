import React ,{useState,useEffect} from 'react'
import { Descriptions } from 'antd';
import { useParams } from 'react-router-dom';
import axios from 'axios'
export default function UserDetails() {
    const [userData,setUserData] = useState([])
    const {id} =  useParams();
    // console.log(id);
    // const items = [
    //     {
    //       key: '1',
    //       label: 'UserName',
    //       children: 'Zhou Maomao',
    //     },
    //     {
    //       key: '2',
    //       label: 'Telephone',
    //       children: '1810000000',
    //     },
    //     {
    //       key: '3',
    //       label: 'Live',
    //       children: 'Hangzhou, Zhejiang',
    //     },
    //     {
    //       key: '4',
    //       label: 'Remark',
    //       children: 'empty',
    //     },
    //     {
    //       key: '5',
    //       label: 'Address',
    //       children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
    //     },
    //   ];
      useEffect(()=>{
        axios.get(`https://fakestoreapi.com/users/${id}`,  {
           headers: {
          'Content-Type': 'application/json' // Specify the content type
      }},)
        .then(function (response) {
          const {data} = response;
          if(data){
            const keys = Object.keys(data)
            // {
            //     key: '1',
            //     label: 'UserName',
            //     children: 'Zhou Maomao',
            //   },
            let tempUserArray = []
            for(let i = 0;i<keys.length;i++){
                if( keys[i]==="address"){
                   const {zipcode,street,city} = data[keys[i]] 
                    tempUserArray.push(
                        {
                key: i,
                label: keys[i],
                children: `${street} ${city} ${zipcode}`,
                })
            }
                else if(keys[i]==="name"){
                    const {firstname,lastname} = data[keys[i]] 
                     tempUserArray.push(
                         {
                 key: i,
                 label: keys[i],
                 children: `${firstname}${lastname}`,
                 })
                }
                else{
                    tempUserArray.push(
                        {
                key: i,
                label: keys[i],
                children: data[keys[i]],
                })
                }
               

            }

            if(tempUserArray.length>0){
                console.log(tempUserArray);
                
                setUserData(tempUserArray)
            }
           
            
          }
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
    
        });
      },[])
  return (
    <div>
      <Descriptions title="User Info" items={userData} />;
    </div>
  )
}
