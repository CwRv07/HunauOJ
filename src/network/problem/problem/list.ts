import { MODULE_URL } from './index';
import OLPRequest from '../../request';

interface ListParams {
  pageNum: number;
  pageSize?: number;
  pDifficulty?: number;
}

const list = (params: ListParams) => {
  params.pageSize ??= 10;

  return OLPRequest({
    url: MODULE_URL + `/problems`,
    method: 'GET',
    data: {
      ...params,
    },
  });
};

export default list;
