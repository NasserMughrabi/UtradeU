import React from 'react'
import Post from './Post';
import ListFeed from './ListFeed';
import "./../styles/home.css";

const Home = () => {
  return (
    <main className='home'>
      <section className='column-1'>
        
      </section>
      <section className='column-2 list'>
        <Post />
        <ListFeed />
      </section>
      <section className='column-3 chat'>

      </section>
    </main>
  );
}

export default Home