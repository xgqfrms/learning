import { RacingPage } from './app.po';

describe('racing App', function() {
  let page: RacingPage;

  beforeEach(() => {
    page = new RacingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
