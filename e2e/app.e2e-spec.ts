import { Ng2PokedexPage } from './app.po';

describe('ng2-pokedex App', function() {
  let page: Ng2PokedexPage;

  beforeEach(() => {
    page = new Ng2PokedexPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
