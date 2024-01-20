export default function PostActions({ likes, comments, share }) {
  return (
    <div className="post-actions flex">
      <div className="left">
        <i className="bi bi-hand-thumbs-up-fill color-orange icon-30 mr-1"></i> {likes}
      </div>
      <div className="flex justify-content-center align-items-center">
        <i className="bi bi-chat icon-30 mr-1"></i> {comments}
      </div>
      <div className="right align-items-center">
        <i className="bi bi-reply icon-30 mr-1"></i> {share}
      </div>
    </div>
  );
}