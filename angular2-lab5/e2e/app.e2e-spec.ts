import { Angular2Lab5Page } from './app.po';

describe('angular2-lab5 App', function() {
  let page: Angular2Lab5Page;

  beforeEach(() => {
    page = new Angular2Lab5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
