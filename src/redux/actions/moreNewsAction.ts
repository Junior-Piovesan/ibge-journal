export const COUNT_MORE = 'COUNT_MORE';

export const RESET_COUNT = 'RESET_COUNT';

export const countMoreAction = (quant:number = 10) => {
  return {
    type: COUNT_MORE,
    payload: quant,
  };
};

export const resetCount = () => {
  return {
    type: RESET_COUNT,
  };
};
