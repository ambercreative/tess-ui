'use client';
import Checkbox from '../components/ui/checkbox';
import Switch from '../components/ui/switch';

export default function Home() {
  return (
    <main className="bg-surface flex justify-center items-center h-lvh">
      <div className="flex gap-3 items-center">
        <Checkbox></Checkbox>
        <Switch></Switch>
      </div>
    </main>
  );
}
