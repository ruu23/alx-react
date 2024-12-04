import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utils functions tests', () => {
  
  // Test for getFullYear
  it('should return the current year', () => {
    const year = getFullYear();
    expect(year).toBe(new Date().getFullYear());
  });

  // Test for getFooterCopy with true argument
  it('should return "Holberton School" when true is passed', () => {
    const result = getFooterCopy(true);
    expect(result).toBe("Holberton School");
  });

  // Test for getFooterCopy with false argument
  it('should return "Holberton School main dashboard" when false is passed', () => {
    const result = getFooterCopy(false);
    expect(result).toBe("Holberton School main dashboard");
  });

  // Test for getLatestNotification
  it('should return the correct notification string', () => {
    const result = getLatestNotification();
    expect(result).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });

});
