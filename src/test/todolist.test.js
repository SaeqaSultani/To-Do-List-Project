import 'jest-localstorage-mock';
import addData from '../module/addData.js';
import clearAllData from '../module/clearAllData.js';
import deletTasksFromLocalSorage from '../module/deleteData.js';
import { testCurrentValue, testEditValue } from './testEditData.js';
import getdata from '../module/getData.js';
import testCheckBoxValue from './testCheckData.js';

describe('Test methods', () => {
  test('should add data to the list', () => {
    addData('the');
    const data = getdata();
    expect(data.length).toBe(1);
  });

  test('should edit data from the list', () => {
    testCurrentValue('the');
    testEditValue('is');
    const data = getdata();
    expect(data[0].description).toBe('is');
  });

  test('should check the checkbox of data from the list', () => {
    testCheckBoxValue(true);
    const data = getdata();
    expect(data[0].completed).toBe(true);
  });

  test('should delete the checked data from the list', () => {
    clearAllData();
    const data = getdata();
    expect(data.length).toBe(0);
  });

  test('should delete data from the list', () => {
    deletTasksFromLocalSorage('hi');
    const data = getdata();
    expect(data.length).toBe(0);
  });
});