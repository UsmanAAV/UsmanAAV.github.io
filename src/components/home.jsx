import React from 'react';
import photoUrl from '../assets/images/me_2.jpg';

export default () => (
  <div className="container about tab py-4">
    <div className="row">
      <div className="col-lg-9">
        <h2 className="pb-2">About me</h2>
        <img src={photoUrl} className="img-fluid img-thumbnail" alt="me" />
        <p>My name is Azamat Abdullin. I&rsquo;m originally from Bol&rsquo;shaya Usmanova,
        Russia, but I&rsquo;ve been residing in Roshchino
        for quite some time now.</p>

        <p>I&rsquo;m currently working as a technical support specialist.
        Before that I worked as a programmer at the university.</p>

        <p>In addition to programming, I&rsquo;m interested in cars, in particular,
          the device engines and engine management systems.
          I redid the engine management system in my car from carburetor to electronic.</p>

        <p>I completed two training projects on <a href="https://ru.hexlet.io/u/usman">hexlet.io</a>.
          There I study the profession "frontend programmer". Now I&rsquo;m making
          a <a href="https://github.com/UsmanAAV/game-2048-library-functional">clone</a> of
          the game 2048.</p>
      </div>
    </div>
  </div>
);
