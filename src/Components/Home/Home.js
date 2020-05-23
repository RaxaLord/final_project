import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <section>
        <h1>this</h1>
      </section>
      <section>
        <h1>is</h1>
      </section>
      <section>
        <Link to='/login'>
          <h1>login</h1>
        </Link>
      </section>
    </div>
  );
}
