import React from 'react'
import Post from './Post';
import Chat from './Chat'
import ListFeed from './ListFeed';
import "./../styles/home.css";

const Home = () => {
  return (
    <main className='home'>
      <section className='column-1 left'>
        {/* <Sidebar /> */}
      </section>
      <section className='column-2 middle'>
        <Post />
        <ListFeed />
      </section>
      <section className='column-3 right'>
        <Chat />
      </section>
    </main>
  );
}

export default Home