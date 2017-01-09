import { HeroesPage } from './app.po';

describe('heroes App', function() {
  let page: HeroesPage;

  beforeEach(() => {
    page = new HeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
