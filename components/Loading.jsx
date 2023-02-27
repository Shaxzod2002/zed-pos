import React from 'react';
import ReactLoading from 'react-loading';
export default function Loading() {
  return (
    <div className="flex min-h-[200px] w-full items-center justify-center">
      <ReactLoading
        type="spinningBubbles"
        color="#000"
        width={100}
        height={100}
      />
    </div>
  );
}
