import { DynamicRequirePage } from './app.po';

describe('dynamic-require App', function() {
  let page: DynamicRequirePage;

  beforeEach(() => {
    page = new DynamicRequirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
