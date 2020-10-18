import { reactive } from 'vue';

export function usePage() {
  const pagination = reactive({
    total: 0,
    current: 1,
    pageSize: 10,
    pageSizes: [10, 30, 50],
    layout: 'pagesizes,total,pager,jumper,jumpbtn'
  });

  const upgradeTotal = (count: number) => {
    pagination.total = count;
  };

  const resetPage = () => {
    pagination.current = 1;
    pagination.pageSize = 10;
    pagination.total = 0;
  };

  return {
    pagination,
    upgradeTotal,
    resetPage
  };
}
