import React from "react";

const Title = ({ label, tag }: { label: string; tag: string }) => {
  return (
    <div className="flex flex-col">
      <span className="text-accent! font-mono tracking-tighter">{`<${tag}/>`}</span>
      <h1>{label}</h1>
    </div>
  );
};

export default Title;
