import { delay } from "@/helpers";

const Home: React.FC = async() => {
  await delay(1000);
  
  return (
    <section className='h-52 w-full bg-blue-500 text-white rounded-2xl p-10'>
      <h2 className='text-3xl font-bold'>Parallel Routes</h2>
    </section>
  );
};

export default Home;
