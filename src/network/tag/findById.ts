import { MODULE_URL } from '.';
import OLPRequest from '../request';

const findById = (tagId: number, token: string) => {
  return OLPRequest({
    url: MODULE_URL + `/tag/${tagId}`,
    method: 'GET',
    headers: {
      token,
    },
  });
};

export default findById;
