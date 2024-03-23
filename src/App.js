import { Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './component/Menu';
import Weather from './page/Weather';
import RockPaperScissor from './page/RockPaperScissor';


function App() {

  // 1. 유저는 박스 두개를 볼 수 있다.(타이틀, 사진, 결과)
  // 2. 유저는 박스 하단에 가위바위보 버튼을 볼 수 있다.
  // 3. 버튼을 클릭하면 클릭한 아이템이 유저 박스에 보인다.
  // 4. 버튼을 클릭하면 컴퓨터 아이템은 랜덤하게 선택이 된다.
  // 5. 3번 4번의 아이템을 가지고 누가 이겼는지 승패를 나눈다.
  // 6. 박스 테두기가 결과에 따라 색이 변한다. 기면 빨간색, 이기면 초록색, 비기면 검정색이 보인다.

  return (
    <div className='wrap'>
      <Menu />
      <Routes>
        <Route path='/' element={<Weather />}/>
        <Route path='/page/RockPaperScissor' element={<RockPaperScissor />}/>
      </Routes>
    </div>
  );
}

export default App;
