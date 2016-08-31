import expect from 'expect';
import {industriesFormattedForDropdown} from '../../src/selectors/selectors';

describe('Startup Selectors', () => {
  describe('industriesFormattedForDropdown', () => {
    it('should return industry data formatted for use in a dropdown', () => {
      const industries = [
        {id: 'ind3', name: 'Manufacturing'},
        {id: 'ind9', name: 'Information and communication'}
      ];

      const expected = [
        {value: 'ind3', text: 'Manufacturing'},
        {value: 'ind9', text: 'Information and communication'}
      ];

      expect(industriesFormattedForDropdown(industries)).toEqual(expected);
    });
  });
});
