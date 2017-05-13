import { FirstSamplePage } from './app.po';

describe('first-sample App', () => {
  let page: FirstSamplePage;

  beforeEach(() => {
    page = new FirstSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
