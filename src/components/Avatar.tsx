import { memo } from "react";

type Props = {
  children: React.ReactNode;
  onClick: (assignee: string) => void;
  isSelected?: boolean;
};

export const Avatar = memo((props: Props) => {
  console.log("Avatar");

  const { children, onClick, isSelected = false } = props;
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: isSelected ? "red" : "gray",
        position: "relative",
      }}
      onClick={() => onClick(`${children}`)}
    >
      <span
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
        }}
      >
        {children}
      </span>
    </div>
  );
});
