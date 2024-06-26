import { Route, Routes } from 'react-router-dom';
import './App.css';
import Weather from './page/Weather';
import RockPaperScissor from './page/RockPaperScissor';
import ProductAll from './homepage/page/ProductAll';
import Login from './homepage/page/Login';
import Main from './homepage/Main';
import WeatherAndGame from './page/WeatherAndGame';
import IndexPage from './page/IndexPage';
import { useEffect } from 'react';
import PrivateRoutes from './homepage/route/PrivateRoutes';
import Counter from './redux_project/Counter';
import PhoneBook from './phone_book/PhoneBook';




function App() {

  // 1. 유저는 박스 두개를 볼 수 있다.(타이틀, 사진, 결과)
  // 2. 유저는 박스 하단에 가위바위보 버튼을 볼 수 있다.
  // 3. 버튼을 클릭하면 클릭한 아이템이 유저 박스에 보인다.
  // 4. 버튼을 클릭하면 컴퓨터 아이템은 랜덤하게 선택이 된다.
  // 5. 3번 4번의 아이템을 가지고 누가 이겼는지 승패를 나눈다.
  // 6. 박스 테두기가 결과에 따라 색이 변한다. 기면 빨간색, 이기면 초록색, 비기면 검정색이 보인다.

  useEffect(() => {
  },[])

  return (
    <div className='wrap'>
      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path='/weather&game' element={<WeatherAndGame />}>
          <Route path='/weather&game/weather' element={<Weather />}/>
          <Route path='/weather&game/RockPaperScissor' element={<RockPaperScissor />}/>
        </Route>
        <Route path='/h&m' element={<Main />}>
          <Route path='/h&m/productAll' element={<ProductAll />}/>
          <Route path='/h&m/login' element={<Login />} />
          <Route path='/h&m/product/:id' element={<PrivateRoutes/>} />
        </Route>
        <Route path='/counter' element={<Counter />}/>
        <Route path='/phone-book' element={<PhoneBook />}/>
      </Routes>
    </div>
  );
}

export default App