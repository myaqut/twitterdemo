import { useState } from 'react'
import './App.css'
import PostList from './components/PostList.jsx'
import MainHeader from './components/MainHeader.jsx'

function App() {
  const [ModalVisibility, setModalVisibility] = useState(false);
  function ModalHiderHandler() {
    setModalVisibility(false);
  };
  function ModalShowerHandler() {
    setModalVisibility(true);
  }


  return (
    <>
      <MainHeader onModalShow={ModalShowerHandler} ModalVisibility={ModalVisibility}/>
      <PostList onModalClose={ModalHiderHandler} ModalVisibility={ModalVisibility}/>
    </>
  )
}

export default App
