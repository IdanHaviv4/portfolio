const Title = ({
  label,
  tag,
  orientation = "left",
  variant = "dark",
}: {
  label: string;
  tag: string;
  orientation?: "left" | "center";
  variant?: "light" | "dark";
}) => {
  return (
    <div
      className="flex flex-col"
      style={{
        alignItems: orientation == "left" ? "start" : "center",
      }}
    >
      <span className="text-accent! font-mono! tracking-tighter">{`<${tag} />`}</span>
      <h1
        style={{
          color: variant == "light" ? "white" : "",
        }}
      >
        {label}
      </h1>
    </div>
  );
};

export default Title;
