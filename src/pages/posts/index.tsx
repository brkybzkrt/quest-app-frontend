import { Post } from '@/interfaces/post.interface'
import { GetServerSideProps } from 'next'
import React from 'react'
import { useRouter } from 'next/router'

const Posts = ({posts}:any) => {
  const router = useRouter();
  
  return (
    <>{posts.map((post:Post) =>{
     
     return <>
      <p>{post.title}</p>
      <p>{post.text}</p>
      </>
    })}</>
  )
}

export default Posts



export const getServerSideProps:GetServerSideProps  =async (context)=>{

  //const {params}= context;

  const data = await fetch(`${process.env.SERVER_URL}posts`);

  const posts:Post[] = await data.json();

  return {
    props: {
      posts,
    }
  }
}