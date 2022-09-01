import 'jest-localstorage-mock';
import addData from '../module/addData.js';
import deletTasksFromLocalSorage from '../module/deleteData.js';
import getdata from '../module/getData.js';

describe('AddData', () => {
  test('should add data to the list', () => {
    addData('hi');

    const data = getdata();

    expect(data.length).toBe(1);
  });

  test('should delete data from the list', () => {
    deletTasksFromLocalSorage('hi');
    const arr = getdata();

    expect(arr.length).toBe(0);
  });
});