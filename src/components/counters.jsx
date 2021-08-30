import React from "react";
import Counter from "./counter";

const Counters = ({ counters, onReset, ...rest }) => {
  return (
    <div>
      <button onClick={onReset} className="btn btn-primary btn-small m-2">
        Сброс
      </button>
      {counters.map((counter) => (
        <Counter key={counter.id} {...counter} {...rest} />
      ))}
    </div>
  );
};

export default Counters;
