import { CommentInterface } from '@/interfaces/comment.interface'
import { PostInterface } from '@/interfaces/post.interface'
import { useRouter } from 'next/router'
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next/types'
import React from 'react'

 const OnePost = (props:{post:PostInterface}) => {
    const {post}= props;

  return (
    <div>{post.title}</div>
  )
}

export default OnePost;


export const getServerSideProps:GetServerSideProps  =async (context)=>{

    const {id}= context.query;

    const data = await fetch(`${process.env.SERVER_URL}posts/post/${id}`);
  
    const post:PostInterface = await data.json();
    
    return {
      props: {
        post,
      }
    }
  }


