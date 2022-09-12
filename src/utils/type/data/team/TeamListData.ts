import ListData from '../ListData';
import TeamData from './TeamData';

export default interface TeamListData extends ListData<TeamData> {
  records: TeamData[];
}
