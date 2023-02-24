import React from 'react';

export function Nav() {
  return (
    <nav className="py-[30px] justify-between navbar p-6 h-[90px]">
      <h1 className="font-poppins text-black text-[35px] cursor-pointer">Amangalo</h1>

      <div>
        <ul className="flex justify-end">
          <li className="text-poppins ">About</li>
          <li>Create</li>
          <li>Learn</li>
        </ul>
      </div>
    </nav>
  );
}
