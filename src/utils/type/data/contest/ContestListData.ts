import ListData from '../ListData';
import ContestData from './ContestData';
export default interface ContestListData extends ListData<ContestData> {
  records: ContestData[];
}
