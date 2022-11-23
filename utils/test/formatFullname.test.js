const formatFullname = require('../formatFullname.js');
const { expect } = require('chai');

describe('FormatFullname', () => {
  it('should return "Error" if arg is not a string or empty', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname('')).to.equal('Error');
    expect(formatFullname()).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
    expect(formatFullname(1)).to.equal('Error');
    expect(formatFullname(true)).to.equal('Error');
  });

  it('should return "Error" if name has more or less than 2 words',  () => {
    expect(formatFullname('John Doe Test')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
  });
});