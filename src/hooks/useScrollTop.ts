import { ref } from 'vue';

export function useScrollTop() {
  const top = ref(0);

  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    top.value = scrollTop;
  });

  return top;
}
