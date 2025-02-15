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

            <input
              value={post.tag}
              onChange={(e) => setPost({...post, tag:
              e.target.value})}
              placeholder='#tag'
              required
              className ="form_input"
              />
          </label>
          <label>
            <span className='font-satoshi'>
              Tag {' '}
              <span className='font-normal'>#product</span>
            </span>

            <textarea
              value={post.prompt}
              onChange={(e) => setPost({...post,
              prompt: e.target.value})}
              placeholder='Enter Prompt'
              required
              className ="form_textarea"
              />
          </label>

          <div className='flex-end mx-3 mb-5 gap-4'>
            <Link href={'/'} className='text-gray-500'
            cancel>
            </Link>

            <button
              type='submit'
              disabled={submitting}
              className='px-5 py-5 text-sm bg-primary-orange rounded-full text-white'
            >
              {submitting? '${type}...' :type}
            </button>


          </div>
      </form>
    </section>
  )
}

export default Form