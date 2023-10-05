import getText from '../getText';
describe('getText', function () {
  it('should return placeholder when files is not defined', function () {
    expect(getText(undefined, 'placeholder text')).toBe('placeholder text');
  });
  it('should return placeholder when files is an empty array', function () {
    expect(getText([], 'placeholder text')).toBe('placeholder text');
  });
  it('should return the name of the file when files has only one item', function () {
    var files = [{
      name: 'filename.jpg'
    }];
    expect(getText(files, '')).toBe('filename.jpg');
  });
  it('should return a string with the length of files', function () {
    var files = [{
      name: 'filename1.jpg'
    }, {
      name: 'filename2.jpg'
    }];
    expect(getText(files, '')).toBe('2 files');
  });
  it('should return placeholder', function () {
    var files = [{
      name: 'filename.jpg'
    }];
    expect(getText(files, 'Drag & Drop', null)).toBe('Drag & Drop');
  });
});