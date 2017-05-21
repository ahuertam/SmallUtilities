import { RolliniciativePage } from './app.po';

describe('rolliniciative App', () => {
  let page: RolliniciativePage;

  beforeEach(() => {
    page = new RolliniciativePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
