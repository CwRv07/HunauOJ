import { MODULE_URL } from './index';
import OLPRequest from '../request';

const list = (pageNum: number, pageSize = 10) => {
  return OLPRequest({
    url: MODULE_URL + `/problems`,
    method: 'GET',
    data: {
      pageNum,
      pageSize,
    },
  });
};

export default list;
