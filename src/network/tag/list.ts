import { MODULE_URL } from '.';
import OLPRequest from '../request';

interface listParams {
  pageNum: number;
  pageSize?: number;
  tName?: string;
}

const list = (params: listParams, token: string) => {
  params.pageSize ??= 10;

  return OLPRequest({
    url: MODULE_URL + `/tags`,
    method: 'GET',
    data: params,
    headers: {
      token,
    },
  });
};

export default list;
