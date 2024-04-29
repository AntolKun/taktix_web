import Header from '../components/Header';

export default function Home() {
  return (
    <main>
      <Header />
      <div className="mx-52 my-14">
        <div className="flex items-center">
          <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
          <h1 className="ml-4 my-2">Latihan Ujian</h1>
        </div>
        <div className="my-10 grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
          <div className="h-32 rounded-lg bg-gray-200"></div>
          <div className="h-32 rounded-lg bg-gray-200"></div>
          <div className="h-32 rounded-lg bg-gray-200"></div>
          <div className="h-32 rounded-lg bg-gray-200"></div>
        </div>
      </div>
    </main>
  );
}
