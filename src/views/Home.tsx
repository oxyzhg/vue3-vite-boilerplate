import { defineComponent, onMounted, ref } from 'vue';
import { useCount } from '../hooks/useCount';

export default defineComponent({
  name: 'Home',

  setup() {
    // lifecycle
    onMounted(() => {
      console.log('home mounted');
    });

    // message
    const msg = ref('message');

    // useCount
    const { count, doubleCount, incrument } = useCount();

    const incrument5 = () => (count.value += 5);

    return {
      msg,
      count,
      doubleCount,
      incrument,
      incrument5
    };
  },

  render() {
    return (
      <>
        <h1>home page</h1>
        <button onClick={this.incrument}>加1</button>
        <button onClick={this.incrument5}>加5</button>
      </>
    );
  }
});
