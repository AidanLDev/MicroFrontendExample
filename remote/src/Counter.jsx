import { createSignal } from 'solid-js';

export default () => {
  const [count, setCount] = createSignal(0);

  return (
    <div class="bg-blue-900 text-white p-6">
      <p>count = {count()}</p>
      <button onClick={() => setCount(count() + 1)}>Add one</button>
    </div>
  )
}