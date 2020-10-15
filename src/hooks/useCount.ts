import { ref, reactive, computed } from 'vue';

export function useCount() {
  const count = ref(0);

  const doubleCount = computed(() => count.value * 2);

  const incrument = () => count.value++;

  return {
    count,
    doubleCount,
    incrument
  };
}
