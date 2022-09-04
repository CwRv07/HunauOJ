export default interface ProblemContentData {
  id: string;
  timeLimit: number;
  memoryLimit: number;
  stackLimit: number;
  description: string;
  input: string;
  output: string;
  example: string;
  hint: string;
}
