import Header from './components/common/Header';
import Todos from './components/todo/Todos';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Header/> */}
      <Todos />
    </main>
  );
}
