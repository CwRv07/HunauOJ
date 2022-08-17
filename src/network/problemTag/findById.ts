import { MODULE_URL } from '.';
import OLPRequest from '../request';

const findById = (problemId: number, token: string) => {
  return OLPRequest({
    url: MODULE_URL + `/problemTag/${problemId}`,
    method: 'GET',
    headers: {
      token,
    },
  });
};
export default findById;
