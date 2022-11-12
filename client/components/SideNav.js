import React from "react";

function SideNav () {
  return (
    <div class=" min-h-screen flex overflow-hidden">
      <nav aria-label="Sidebar" class="hidden lg:block flex-shrink-0 bg-black overflow-y-auto">
        <div class="relative w-36 flex space-y-16 flex-col p-3">
          <a href="#" class="text-gray-400 hover:text-red-700">
              <div class="flex-shrink-0 inline-flex items-center justify-center w-14">
               <img class="h-20" src="https://cdn-icons-png.flaticon.com/512/3845/3845763.png"></img>
              </div>
              <div class="text-center text-s font-normal ">Home</div>
          </a>
          <a href="#" class="text-gray-400 hover:text-red-700">
              <div class="flex-shrink-0 inline-flex items-center justify-center w-14">
              </div>
              <div class="text-center text-s font-normal ">Frontend</div>
          </a>
          <a href="#" class="text-gray-400 hover:text-red-700">
              <div class="flex-shrink-0 inline-flex items-center justify-center w-14">
              </div>
              <div class="text-center text-s font-normal ">Backend</div>
          </a>
          <a href="#" class="text-gray-400 hover:text-red-700">
              <div class="flex-shrink-0 inline-flex items-center justify-center w-14">
              </div>
              <div class="text-center text-s font-normal ">Metrics</div>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default SideNav;