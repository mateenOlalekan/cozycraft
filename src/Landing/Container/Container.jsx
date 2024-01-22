import './Container.css';
import Header from '../Header/Header';
import MainContent from '../Main/Main';

function Container() {
  return (
    <div className='con'>
      <Header/>
      <MainContent/>
    </div>
  )
}

export default Container;