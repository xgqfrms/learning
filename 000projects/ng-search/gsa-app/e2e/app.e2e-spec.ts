import { GsaAppPage } from './app.po';

describe('gsa-app App', () => {
  let page: GsaAppPage;

  beforeEach(() => {
    page = new GsaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
