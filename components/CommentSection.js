import { useState, useEffect } from 'react';
import Image from "next/image";

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch('/api/comments');
        const data = await response.json();
        setComments(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching comments:", error);
        setLoading(false);
      }
    };

    fetchComments();
    const interval = setInterval(fetchComments, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="comment-section">
        <h3>Comment Section</h3>
        <p>Memuat komentar...</p>
      </div>
    );
  }

  return (
    <div className="comment-section">
      <h3>Comment Section</h3>
      <div id="comments">
        {(comments ?? []).length === 0 ? (
          <p>Belum ada komentar</p>
        ) : (
          (comments ?? []).map((comment, index) => (
            <div key={index} className="comment-box">
              <div className="comment">
                <div className="logo-reply">
                  <Image
                    src="/assets/radupat.png"
                    alt="Radupat"
                    width={40}
                    height={40}
                    style={{
                      borderRadius: '50%',
                      objectFit: "cover"
                    }} />
                </div>
                <div>
                  <strong>Radupat:</strong> {comment.aspirasi}
                  {comment.ps && (
                    <div className="ps-comment">
                      <em>P.S. {comment.ps}</em>
                    </div>
                  )}
                </div>
              </div>
              {(comment.respon ?? []).map((reply, replyIndex) => (
                <div key={replyIndex} className="reply-container">
                  <div className="arrow">
                    <Image
                      src="/assets/arrow.png"
                      alt="Arrow"
                      width={30}
                      height={30}
                      style={{
                        objectFit: "contain"
                      }} />
                  </div>
                  <div className="logo-reply">
                    <Image
                      src="/assets/mpk.png"
                      alt="MPK"
                      width={40}
                      height={40}
                      style={{
                        borderRadius: '50%',
                        objectFit: "cover"
                      }} />
                  </div>
                  <div className="reply">
                    <strong>MPK:</strong> {reply}
                  </div>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
}