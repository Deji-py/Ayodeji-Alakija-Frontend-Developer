import "react-placeholder/lib/reactPlaceholder.css";
import React, { useEffect, useState } from "react";
import ReactPlaceholder from "react-placeholder";
import formatArticleBody from "../../Services/FormatArticleBody";
import moment from "moment";
import { Box, Image, Text } from "@chakra-ui/react";
import { RectShape, TextBlock } from "react-placeholder/lib/placeholders";
import { useParams } from "react-router-dom";
import { client } from "../../../sanity";

const awesomePlaceholder = (
  <div className="my-awesome-placeholder">
    <RectShape color="gray" style={{ width: "100%", height: "200px" }} />
    <TextBlock rows={7} color="gray" />
  </div>
);

function BlogLayout() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && slug.current == $slug] {
          title,
          publishedAt,
          image {
            asset -> {
              url
            }
          },
          content,
          body
        }`,
        { slug }
      )
      .then((data) => {
        if (data && data.length > 0) {
          setPost(data[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
      });
  }, [slug]);

  if (!post) {
    return (
      <ReactPlaceholder
        type="media"
        rows={7}
        ready={false}
        customPlaceholder={awesomePlaceholder}
      ></ReactPlaceholder>
    );
  }

  return (
    <div
      style={{
        padding: "0px 10px 0px 10px",
        marginTop: "40px",
      }}
    >
      <Text fontSize={25} fontWeight={"bold"}>
        {post.title}
      </Text>
      <p
        style={{ margin: "10px 0px 10px 0px", color: "gray", fontSize: "14px" }}
      >
        {moment(post.publishedAt).format("LLL")}
      </p>
      <img src={post.image.asset.url} alt={post.title} />
      <div style={{ marginTop: "10px" }} />
      {formatArticleBody(post?.body)}
    </div>
  );
}

export default BlogLayout;
