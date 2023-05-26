"use client";
const Container = (props) => {
  return (
    <div
      className="
      border-red-500
          max-w-[2520px]
          mx-auto
          xl:px-20
          md:px-10
          sm:px-2
          px-4
          "
    >
      {props.children}
    </div>
  );
};

export default Container;
