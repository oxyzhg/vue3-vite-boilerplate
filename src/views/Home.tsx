import { defineComponent, onMounted, ref, unref } from 'vue';
import { useCount } from '../hooks/useCount';
import { usePage } from '../hooks/usePage';

import { mapState } from 'vuex';

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

    // pagination
    const { pagination, upgradeTotal, resetPage } = usePage();

    return {
      msg,
      count,
      doubleCount,
      incrument,
      incrument5,
      pagination,
      upgradeTotal,
      resetPage
    };
  },

  computed: {
    ...mapState('message', {
      msg1: 'msg'
    })
  },

  render() {
    return (
      <>
        <h1>home page</h1>
        <button onClick={this.incrument}>加1</button>
        <button onClick={this.incrument5}>加5</button>

        <div>{this.pagination}</div>
        <button onClick={this.resetPage}>reset</button>
      </>
    );
  }
});
