import React, { PropTypes } from 'react';
import StartupListRow from './StartupListRow';

const StartupList = ({startups}) => {
  return (
    <table className="table left_align">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Name</th>
        <th>Industry</th>
        <th>URL</th>
        <th>keywords</th>
      </tr>
      </thead>
      <tbody>
      {startups.map(startup =>
        <StartupListRow key={startup.id} startup={startup} />
      )}
      </tbody>
    </table>
  );
};

StartupList.propTypes = {
  startups: PropTypes.array.isRequired
};

export default StartupList;
