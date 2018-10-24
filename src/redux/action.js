export  const getNextPage = res => {
  return {
    type: 'NEXT_PAGE',
    currentPage: res,
  }
}
export const  initialPage = res => {
    return {
        type:'INITIAL_PAGE',
        payload: res.data
    };
}
export const loading = res => {
  return {
      type:'LOADING',
      loading: res
  };
}