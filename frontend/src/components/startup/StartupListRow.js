import React, { PropTypes } from 'react';
import {Link} from 'react-router';

const StartupListRow = ({startup}) => {
  return (
    <tr>
      <td><a href={startup.watchHref} target="_blank"><span className="glyphicon glyphicon-facetime-video" aria-hidden="true"></span></a></td>
      <td><Link to={'/startup/' + startup.id}> {startup.name}</Link></td>
      <td>{startup.url}</td>
    </tr>
  );
};

StartupListRow.propTypes = {
  startup: PropTypes.object.isRequired
};

export default StartupListRow;
