import { MODULE_URL } from '.';
import OLPRequest from '@/network/request';

const findById = (id: number) => {
  return OLPRequest({
    url: MODULE_URL + `/contest/${id}`,
    method: 'GET',
  });
};

export default findById;
