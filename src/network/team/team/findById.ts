import { MODULE_URL } from '.';
import OLPRequest from '@/network/request';
import { TeamData } from '@/utils/type/data';

const findById = (id: number) => {
  return new Promise<TeamData>(resolve => {
    OLPRequest({
      url: MODULE_URL + `/team/${id}`,
      method: 'GET',
    }).then(({ data }: { data: TeamData }) => resolve(data));
  });
};

export default findById;
