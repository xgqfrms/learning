import { ProfilesAppPage } from './app.po';

describe('profiles-app App', () => {
  let page: ProfilesAppPage;

  beforeEach(() => {
    page = new ProfilesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
