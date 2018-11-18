import { MockRequest } from '@delon/mock';
// TIPS: mockjs 一些优化细节见：https://ng-alain.com/docs/mock
// import * as Mock from 'mockjs';

const list = [
  // Main series
  {
    code: 1,
    title: 'SCP系列I (100-999)',
    amount: 1000,
    area: 'main'
  },
  {
    code: 2,
    title: 'SCP系列II (1000-1999)',
    amount: 1000,
    area: 'main'
  },
  {
    code: 3,
    title: 'SCP系列III (2000-2999)',
    amount: 1000,
    area: 'main'
  },
  {
    code: 4,
    title: 'SCP-CN系列IV (3000-3999)',
    amount: 1000,
    area: 'main'
  },
  {
    code: 5,
    title: 'SCP-CN系列V (4000-4999)',
    amount: 1000,
    area: 'main'
  },
  // CN series
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
  },
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
