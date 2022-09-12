export default interface ContestData {
  cId: number;
  cName: string;
  cDescription: string;
  cStart: string;
  cEnd: string;
  // 比赛模式(ACM or OI),0为ACM,1为OI
  cType: number;
  // 是否为实时榜单 0 为不是, 1 为是
  cIsLiveList: number;
  // 比赛是否为私有,1为私有，0为公开
  cAuth: number;
}
