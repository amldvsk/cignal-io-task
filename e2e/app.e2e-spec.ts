import { CignalioPage } from './app.po';

describe('cignalio App', () => {
  let page: CignalioPage;

  beforeEach(() => {
    page = new CignalioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
