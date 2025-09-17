import './App.css';
import TodoList from './TodoList' ;
import ColorBox from './ColorBox';
import ShoppingCart from './ShoppingCart';
import Post from './Post';
import QuizApp from './QuizApp';

function App() {
  return (
    <div>
      <div>
        <b>Bài 1: To-do List:</b>
      </div>
      <TodoList />
      <br />
      <div>
        <b>Bài 2: Color Picker</b>  
      </div>
      <ColorBox />
      <br />
      <div>
        <b>Bài 3: Giỏ hàng</b>
      </div>
      <ShoppingCart />
      <br />
      <div>
        <b>Bài 4:  Like/Dislike Post</b>
      </div>
      <Post />
      <br />
      <div>
        <b>Bài 5: Quiz App</b>
      </div>
      <QuizApp />
    </div>
  );
}

export default App;
