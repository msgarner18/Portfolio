import React, { useState } from "react";

interface Props {
  maxChars?: number;
  children: string;
}
const ExpandableText = ({ maxChars = 100, children }: Props) => {
  if (children.length < maxChars) return <p>{children}</p>;
  const truncatedText = children.substring(0, maxChars);

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <p>
        {isExpanded ? children : truncatedText + "..."}
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Less" : "More"}
        </button>
      </p>
    </>
  );
};

export default ExpandableText;
