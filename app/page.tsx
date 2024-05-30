'use client';
import Checkbox from '../components/ui/checkbox';

export default function Home() {
  return (
    <main className="bg-surface-dark flex justify-center items-center h-lvh">
      <div>
        <Checkbox></Checkbox>
        {/* <div className="relative h-10 w-80 bg-surface-darker rounded-lg shadow-inner after:absolute after:inset-0 after:rounded-inherit after:shadow-[0_1px_0_hsla(0_0%_100%/1)] dark:after:shadow-[0_1px_0_hsla(0_0%_100%/0.1)]"></div> */}
      </div>
    </main>
  );
}
