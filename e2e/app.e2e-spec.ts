import { Angular2FrontEndPage } from './app.po';

describe('angular-2-front-end App', function() {
  let page: Angular2FrontEndPage;

  beforeEach(() => {
    page = new Angular2FrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
