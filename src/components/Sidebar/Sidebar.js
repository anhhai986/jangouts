/**
 * Copyright (c) [2015-2019] SUSE Linux
 *
 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE.txt file for details.
 */

import React from 'react';
import Button from '../Button';
import { actionCreators as roomActions } from '../../state/ducks/room';
import { actionCreators as participantActions } from '../../state/ducks/participants';
import { GiExitDoor } from 'react-icons/gi';
import { MdScreenShare, MdPhoto } from 'react-icons/md';

import './Sidebar.css';

// TODO: Button seems no longer necessary. Use simpler approach
function Sidebar() {
  return (
    <div className="Sidebar">
      <Button className="red" />
      <Button action={participantActions.startScreenSharing}>
        <MdScreenShare />
      </Button>
      <Button action={roomActions.logout}>
        <GiExitDoor />
      </Button>
      <Button className="red" action={participantActions.toggleThumbnailMode}>
        <MdPhoto />
      </Button>
    </div>
  );
}

export default Sidebar;
