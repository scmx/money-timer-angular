import { MoneyTimerPage } from './app.po';

describe('money-timer App', function() {
  let page: MoneyTimerPage;

  beforeEach(() => {
    page = new MoneyTimerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
