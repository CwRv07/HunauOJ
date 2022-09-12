export default interface TeamData {
  tId: number;
  tName: string;
  // 团队状态，是否私有（0为不可用, 1 为公开, 2为私有）
  tStatus: number;
  tDescription: string;
}
