import { Ng2chatPage } from './app.po';

describe('ng2chat App', function() {
  let page: Ng2chatPage;

  beforeEach(() => {
    page = new Ng2chatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
