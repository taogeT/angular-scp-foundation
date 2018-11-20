import { MockRequest } from '@delon/mock';
import * as Mock from 'mockjs';
// TIPS: mockjs 一些优化细节见：https://ng-alain.com/docs/mock

function articleRule () {
  const seriesName = this.area === 'cn' ? '-CN' : '';
  return Mock.mock({'articles|5': [{
    'serialNumber|+1': this.code > 1 ? (this.code - 1) * this.amount : 0,
    'title': '@cword(5, 12)',
    'name': function () {
      return `SCP${seriesName}-${this.serialNumber}`;
    }
  }]})['articles'];
}

function titleRule () {
  const seriesName = this.area === 'cn' ? '-CN' : '';
  const startNumber = this.code <= 1 ? '001' : (this.code - 1) * 1000;
  const endNumber = this.code * 1000 - 1;
  return `SCP${seriesName}系列${numberToRoman[this.code]} (${startNumber}-${endNumber})`;
}

const numberToRoman = { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI' };
const list = Mock.mock({
  'main|5': [{
    'code|+1': 1, amount: 1000, area: 'main',
    'title': titleRule, 'articles': articleRule
  }],
  'cn|2': [{
    'code|+1': 1, amount: 1000, area: 'cn',
    'title': titleRule, 'articles': articleRule
  }]
});

function genData(area: string, code: number) {
  return [...list['main'], ...list['cn']].find(data => {
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
