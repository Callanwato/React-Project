import React from 'react';
import Link from 'next/link';
const Form = ({type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradiesnt'>{type} Post</span>
      </h1>
      <p className='desc text-left max-w-md'>{type} a prompt bossman
      </p>
      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
          <label>
            <span className='font-satoshi'>
              your ai Prompt
            </span>

            <textarea
              value={post.prompt}
              onChange={(e) => setPost({...post,
              prompt: e.target.value})}
              placeholder='Enter Prompt'
              required
              classNamw ="form_textarea"></textarea>
          </label>
      </form>
    </section>
  )
}

export default Form