import { Sieesang2Page } from './app.po';

describe('sieesang2 App', () => {
  let page: Sieesang2Page;

  beforeEach(() => {
    page = new Sieesang2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
