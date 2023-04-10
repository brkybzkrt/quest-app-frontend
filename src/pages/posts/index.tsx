import { PostInterface } from '@/interfaces/post.interface'
import { GetServerSideProps } from 'next/types'
import React from 'react'
import Post from '@/components/Post'
import styles from '@/styles/Posts.module.css'

const Posts = (props:{posts:PostInterface[]}) => {

  const {posts}=props;

  return (
    <>{posts.map((post:PostInterface) =>{
     
     return <div className={styles.container}>
     <Post post={post}/>
      </div>
    })}</>
  )
}

export default Posts



export const getServerSideProps:GetServerSideProps  =async (context)=>{

  //const {params}= context;

  const data = await fetch(`${process.env.SERVER_URL}posts`);

  const posts:PostInterface[] = await data.json();

  return {
    props: {
      posts,
    }
  }
}