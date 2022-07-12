import { MODULE_URL } from '.';
import OLPRequest from '@/network/request';

const deleteContest = (id: number) => {
  return OLPRequest({
    url: MODULE_URL + `/contest/${id}`,
    method: 'DELETE',
  });
};

export default deleteContest;
