import React from "react";

const Title = ({
  label,
  tag,
  orientation = "left",
}: {
  label: string;
  tag: string;
  orientation?: "left" | "center";
}) => {
  return (
    <div
      className="flex flex-col"
      style={{
        alignItems: orientation == "left" ? "start" : "center",
      }}
    >
      <span className="text-accent! font-mono tracking-tighter">{`<${tag}/>`}</span>
      <h1>{label}</h1>
    </div>
  );
};

export default Title;
