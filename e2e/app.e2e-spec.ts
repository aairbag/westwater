import { WestwaterPage } from './app.po';

describe('westwater App', () => {
  let page: WestwaterPage;

  beforeEach(() => {
    page = new WestwaterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
