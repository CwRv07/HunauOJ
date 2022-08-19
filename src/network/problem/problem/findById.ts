import { MODULE_URL } from './index';
import OLPRequest from '../../request';

const findById = (pid: number) => {
  return OLPRequest({
    url: MODULE_URL + `/problem/${pid}`,
    method: 'GET',
  });
};

export default findById;
