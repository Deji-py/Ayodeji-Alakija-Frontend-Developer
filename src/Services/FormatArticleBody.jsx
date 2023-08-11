import React from "react";

function formatArticleBody(blocks) {
  const formattedBlocks = blocks.map((block, index) => {
    if (block._type === "block") {
      return (
        <p key={index} style={{ marginBottom: "16px" }}>
          {block.children.map((child) => child.text).join("")}
        </p>
      );
    } else if (block._type === "heading") {
      const level = block.level || 1;
      const HeadingComponent = `h${level}`;

      return (
        <HeadingComponent key={index} style={{ marginBottom: "16px" }}>
          {block.children.map((child) => child.text).join("")}
        </HeadingComponent>
      );
    } else if (block._type === "image") {
      const imageUrl = block.asset.url;
      const caption = block.caption || "";

      return (
        <React.Fragment key={index}>
          <img src={imageUrl} alt={caption} style={{ maxWidth: "100%" }} />
          <p
            style={{
              fontSize: "12px",
              textAlign: "center",
              marginBottom: "16px",
            }}
          >
            {caption}
          </p>
        </React.Fragment>
      );
    }
    // Add more cases to handle other block types as needed
    return null;
  });

  return formattedBlocks;
}

export default formatArticleBody;
