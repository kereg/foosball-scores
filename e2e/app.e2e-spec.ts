import { FoosballScoresPage } from './app.po';

describe('foosball-scores App', () => {
  let page: FoosballScoresPage;

  beforeEach(() => {
    page = new FoosballScoresPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
