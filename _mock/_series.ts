import { MockRequest } from '@delon/mock';
// TIPS: mockjs 一些优化细节见：https://ng-alain.com/docs/mock
// import * as Mock from 'mockjs';

const list = [
  {
    code: 1,
    title: 'SCP-CN系列I (100-999)',
    amount: 1000,
    area: 'cn'
  },
  {
    code: 2,
    title: 'SCP-CN系列II (1000-1999)',
    amount: 1000,
    area: 'cn'
  }
];

function genData(area: string, code: number) {
  return [...list].find(data => {
    const isArea = !area || data.area === area;
    const isCode = !code || data.code === code;
    return isArea && isCode;
  });
}

export const SERIES = {
  // 支持值为 Object 和 Array
  // GET 可省略
  'GET /series/:area/:code': (req: MockRequest) => genData(req.params.area, +req.params.code),
};
