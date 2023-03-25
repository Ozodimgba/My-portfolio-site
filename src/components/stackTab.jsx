import React,{useEffect, useState} from 'react'
import { Octokit } from "octokit";

function StackTab() {
const[repos, setRepos] = useState([])
const octokit = new Octokit({ auth: `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` });

useEffect(()=>{
    const fetchData = async () => {
        await octokit.request('GET /user/repos').then((res) => {setRepos(res.data)})
        .catch(err);{
         console.log(err)
        }
      }
      fetchData();
    
},[])

console.log(repos)

  return (
    <div className='flex flex-wrap justify-center'>
    {repos.map((repo)=>{
        return <>
        <div className='border-[#FFFFFF40] border-[3px] my-[1%] mx-[2%] rounded-[1rem] pl-[1rem] py-[10%] w-[20rem]'>

        <h3 className='flex-wrap w-[70%]'>{repo.name}</h3>
        <p>{repo.topic}</p>
        </div>
        </>
    })}
    </div>
  )
}

export default StackTab