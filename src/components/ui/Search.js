import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [name, setName] = useState('');
  const onChange = (e) => {
    setName(e.target.value);
    getQuery(e.target.value);
  };
  return (
    <section className="search">
      <form>
        <input
          type="text"
          onChange={onChange}
          className="form-control"
          placeholder="Search characters"
          value={name}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
