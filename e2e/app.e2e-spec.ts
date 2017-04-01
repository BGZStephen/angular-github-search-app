import { AngularGithubSearchAppPage } from './app.po';

describe('angular-github-search-app App', () => {
  let page: AngularGithubSearchAppPage;

  beforeEach(() => {
    page = new AngularGithubSearchAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
