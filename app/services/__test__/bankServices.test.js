import { getBanksList } from '../bankServices';


describe('Simple test for requesting banks list', () => {
  test('Contain data', async () => {
    const data = await getBanksList();
    expect(data).not.toHaveLength(0);
  });
});
