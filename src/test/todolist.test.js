import 'jest-localstorage-mock';
import addData from '../module/addData.js';
import deletTasksFromLocalSorage from '../module/deleteData.js';
import getdata from '../module/getData.js';

describe('Test methods', () => {
  test('should add data to the list', () => {
    addData('the');

    const data = getdata();

    expect(data.length).toBe(1);
  });

  test('should delete data from the list', () => {
    deletTasksFromLocalSorage('the');
    const arr = getdata();

    expect(arr.length).toBe(0);
  });
});