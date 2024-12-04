import { normalize } from 'normalizr';
import { notification } from './notifications';

// Sample nested JSON data (can be updated to match the provided structure)
const data = {
  notifications: [
    {
      id: '1',
      author: {
        id: '5debd76480edafc8af244228',
        name: 'John Doe',
      },
      context: {
        guid: '5debd76480edafc8af244228',
        text: 'This is a message',
      },
    },
    // Add other notifications as needed, matching the provided list of IDs
    {
      id: '2',
      author: {
        id: '5debd764507712e7a1307303',
        name: 'Jane Doe',
      },
      context: {
        guid: '5debd764507712e7a1307303',
        text: 'Another message',
      },
    },
    // Add more notifications following the structure...
  ],
};

// Normalize the data
const normalizedData = normalize(data.notifications, [notification]);

// Expected result array based on the task description
const expectedResult = [
  '5debd76480edafc8af244228',
  '5debd764507712e7a1307303',
  '5debd76444dd4dafea89d53b',
  '5debd76485ee4dfd1284f97b',
  '5debd7644e561e022d66e61a',
  '5debd7644aaed86c97bf9d5e',
  '5debd76413f0d5e5429c28a0',
  '5debd7642e815cd350407777',
  '5debd764c1127bc5a490a4d0',
  '5debd7646ef31e0861ec1cab',
  '5debd764a4f11eabef05a81d',
  '5debd764af0fdd1fc815ad9b',
  '5debd76468cb5b277fd125f4',
  '5debd764de9fa684468cdc0b',
];

describe('Normalization of notifications data', () => {
  it('should normalize data correctly', () => {
    // Check if the normalized result matches the expected IDs
    const resultIds = normalizedData.result;
    expect(resultIds).toEqual(expectedResult);
  });
});
