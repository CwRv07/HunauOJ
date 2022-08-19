import { MODULE_URL } from './index';
import OLPRequest from '../../request';

const findById = (problemId: number, token?: string) => {
  return OLPRequest({
    url: MODULE_URL + `/problemLanguage/${problemId}`,
    method: 'GET',
    headers: {
      token: token || '',
    },
  });
};

export default findById;
