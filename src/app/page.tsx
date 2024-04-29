import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <div className="flex-grow">
        <Header />
        <div className="mx-40 my-14">
          <div className="flex items-center">
            <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
            <h1 className="ml-4 my-2">Latihan Ujian</h1>
          </div>
          <div className="flex gap-5 items-start text-xs font-medium text-black max-md:flex-wrap">
            <div className="flex flex-col flex-1 px-5 py-3 bg-white rounded-3xl border border-solid border-zinc-500">
              <div className="flex gap-2.5 text-base whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
                  <h1 className="ml-2 my-2">UTBK</h1>
                </div>
              </div>
              <div className="self-start mt-1.5 ml-3 text-neutral-500 max-md:ml-2.5">
                Ujian Tulis Berbasis Komputer
              </div>
              <button className="justify-center self-end px-3.5 py-2 mt-2.5 bg-yellow-400 rounded">
                Lihat Soal
              </button>
            </div>
            <div className="flex flex-col flex-1 px-5 py-3 bg-white rounded-3xl border border-solid border-zinc-500">
              <div className="flex gap-2.5 text-base whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
                  <h1 className="ml-2 my-2">CPNS</h1>
                </div>
              </div>
              <div className="mx-3 mt-1.5 text-neutral-500 max-md:mx-2.5">
                Ujian Calon Pegawai Negeri Sipil
              </div>
              <button className="justify-center self-end px-3.5 py-2 mt-2.5 bg-yellow-400 rounded">
                Lihat Soal
              </button>
            </div>
            <div className="flex flex-col flex-1 px-5 py-3 bg-white rounded-3xl border border-solid border-zinc-500">
              <div className="flex gap-2.5 text-base">
                <div className="flex items-center">
                  <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
                  <h1 className="ml-2 my-2">Kedinasan</h1>
                </div>
              </div>
              <div className="self-start mt-1.5 ml-3 text-neutral-500 max-md:ml-2.5">
                Latihan Ujian Kedinasan
              </div>
              <button className="justify-center self-end px-3 py-2 mt-2.5 bg-yellow-400 rounded">
                Lihat Soal
              </button>
            </div>
            <div className="flex flex-col flex-1 px-5 py-3 bg-white rounded-3xl border border-solid border-zinc-500">
              <div className="flex gap-2.5 text-base">
                <div className="flex items-center">
                  <div className="h-6 w-2 rounded-lg bg-yellow-300"></div>
                  <h1 className="ml-2 my-2">Lihat Semua</h1>
                </div>
              </div>
              <div className="self-start mt-1.5 ml-3 text-neutral-500 max-md:ml-2.5">
                Semua soal yang tersedia
              </div>
              <button className="justify-center self-end px-3 py-2 mt-2.5 bg-yellow-400 rounded">
                Lihat Soal
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
