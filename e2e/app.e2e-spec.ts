import { THarpolePhotographyPage } from './app.po';

describe('tharpole-photography App', () => {
  let page: THarpolePhotographyPage;

  beforeEach(() => {
    page = new THarpolePhotographyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
