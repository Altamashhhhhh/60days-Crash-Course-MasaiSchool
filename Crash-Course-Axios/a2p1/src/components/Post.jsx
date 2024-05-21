let styled = {
  border : "1px solid black" , 
  padding:"20px" , 
  margin : "20px 0"

}
function Post({ title, body }) {
  return (
    <div style={styled}>
      <p>Title : {title}</p>
      <p>Body : {body}</p>
    </div>
  );
}

export default Post;
