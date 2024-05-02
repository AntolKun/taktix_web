import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0">
      <div className="flex gap-5 justify-between px-11 py-3.5 font-medium text-white bg-blue-700 max-md:flex-wrap max-md:px-5">
        <div className="flex gap-5 items-center text-2xl">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e65299e39c2b2a80b59b1c39be7b6eb50ec4951b8157f707c49ddb3037738ec2?apiKey=19816b9fb5bc4b9987983517808491df&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e65299e39c2b2a80b59b1c39be7b6eb50ec4951b8157f707c49ddb3037738ec2?apiKey=19816b9fb5bc4b9987983517808491df&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e65299e39c2b2a80b59b1c39be7b6eb50ec4951b8157f707c49ddb3037738ec2?apiKey=19816b9fb5bc4b9987983517808491df&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e65299e39c2b2a80b59b1c39be7b6eb50ec4951b8157f707c49ddb3037738ec2?apiKey=19816b9fb5bc4b9987983517808491df&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e65299e39c2b2a80b59b1c39be7b6eb50ec4951b8157f707c49ddb3037738ec2?apiKey=19816b9fb5bc4b9987983517808491df&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e65299e39c2b2a80b59b1c39be7b6eb50ec4951b8157f707c49ddb3037738ec2?apiKey=19816b9fb5bc4b9987983517808491df&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e65299e39c2b2a80b59b1c39be7b6eb50ec4951b8157f707c49ddb3037738ec2?apiKey=19816b9fb5bc4b9987983517808491df&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e65299e39c2b2a80b59b1c39be7b6eb50ec4951b8157f707c49ddb3037738ec2?apiKey=19816b9fb5bc4b9987983517808491df&"
            className="shrink-0 self-stretch aspect-[1.11] w-[61px]"
          />
          <img
            className="shrink-0 self-stretch my-auto rounded-full ml-6 h-[35px] w-[37px]"
            srcSet="https://i.pinimg.com/originals/77/a5/d5/77a5d584b40ce787c22346c1cb96a9a5.jpg"
            loading="lazy"
          />
          <div className="flex-auto self-stretch my-auto">
            Hi, Anto Tolo
          </div>
        </div>
        <div className="flex gap-5 justify-between my-auto text-base">
          <button className="justify-center px-6 py-3.5 bg-blue-500 rounded-lg max-md:px-5">
            Download Now
          </button>
          <button className="justify-center px-5 py-3.5 whitespace-nowrap bg-blue-500 rounded-lg">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
