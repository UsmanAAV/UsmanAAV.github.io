import React from 'react';

export default () => (
  <div className="container activity tab py-4">
    <div className="row">
      <div className="col-lg-9">
        <h2 className="pb-2">Activity</h2>
        <p>My projects in no particular order:</p>
        <ul>
          <li><a href="https://github.com/UsmanAAV/project-lvl1-s204">brain-games</a>
            &ndash; My first project on the Hexlet - a few simple CLI games</li>
          <li><a href="https://github.com/UsmanAAV/project-lvl2-s225">genDiff</a>
            &ndash; My second project on the Hexlet - file diff CLI utility</li>
          <li><a href="https://github.com/UsmanAAV/game-2048-library-functional"> game-2048-library-functional</a>
            &ndash;  A library for making 2048 game</li>
        </ul>
      </div>
    </div>
  </div>
);
