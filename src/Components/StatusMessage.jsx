import React from 'react';

const StatusMessage = ({ current, winner }) => {
  //   const winner = calculateWinner(current.board);
  // const message = winner
  //   ? `Winner is ${winner}`
  //   : `Next player is ${current.isXNext ? 'X' : 'O'}`;
  const tie = current.board.every(el => el != null);
  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is
          <span className={`${winner == 'X' ? 'text-green' : 'text-orange'}`}>
            {` ${winner}`}
          </span>
        </>
      )}
      {!winner && !tie && (
        <>
          Next player is
          <span className={`${current.isXNext ? 'text-green' : 'text-orange'}`}>
            {` ${current.isXNext ? 'X' : 'O'}`}
          </span>
        </>
      )}
      {!winner && tie && (
        <>
          <span className="text-green">X</span> and{' '}
          <span className="text-orange">O</span> tied
        </>
      )}
    </div>
  );
};

export default StatusMessage;
