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
      <div className="comment-section" style={{ padding: '1rem' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Comment Section</h3>
        <p>Memuat komentar...</p>
      </div>
    );
  }

  return (
    <div className="comment-section" style={{ 
      padding: '1rem', 
      maxWidth: '100%',
      overflowX: 'hidden'
    }}>
      <h3 style={{ 
        fontSize: '1.25rem', 
        marginBottom: '1rem',
        wordWrap: 'break-word'
      }}>Comment Section</h3>
      
      <div id="comments">
        {(comments ?? []).length === 0 ? (
          <p style={{ fontSize: '0.9rem' }}>Belum ada komentar</p>
        ) : (
          (comments ?? []).map((comment, index) => (
            <div key={index} className="comment-box" style={{
              marginBottom: '1.5rem',
              padding: '0.75rem',
              border: '1px solid #e5e5e5',
              borderRadius: '8px',
              backgroundColor: '#fafafa'
            }}>
              {/* Main Comment */}
              <div className="comment" style={{
                display: 'flex',
                gap: '0.75rem',
                alignItems: 'flex-start',
                marginBottom: '0.75rem'
              }}>
                <div className="logo-reply" style={{ flexShrink: 0 }}>
                  <Image
                    src="/assets/radupat.png"
                    alt="Radupat"
                    width={32}
                    height={32}
                    style={{
                      borderRadius: '50%',
                      objectFit: "cover"
                    }} 
                  />
                </div>
                <div style={{
                  flex: 1,
                  minWidth: 0, // Allows text to wrap properly
                  fontSize: '0.9rem',
                  lineHeight: '1.4'
                }}>
                  <strong>Radupat:</strong>{' '}
                  <span style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                    {comment.aspirasi}
                  </span>
                </div>
              </div>

              {/* Replies */}
              {(comment.respon ?? []).map((reply, replyIndex) => (
                <div key={replyIndex} className="reply-container" style={{
                  marginLeft: '1rem',
                  marginTop: '0.75rem',
                  paddingLeft: '0.75rem',
                  borderLeft: '2px solid #e5e5e5',
                  width: '100%',
                  boxSizing: 'border-box'
                }}>
                  {/* Header with arrow and MPK logo */}
                  <div style={{
                    display: 'flex',
                    gap: '0',
                    alignItems: 'center',
                    marginBottom: '0.75rem'
                  }}>
                    <div className="arrow" style={{ 
                      flexShrink: 0,
                      width: '20px',
                      height: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0',
                      padding: '0'
                    }}>
                      <Image
                        src="/assets/arrow.png"
                        alt="Arrow"
                        width={16}
                        height={16}
                        style={{
                          objectFit: "contain",
                          margin: '0',
                          padding: '0'
                        }} 
                      />
                    </div>
                    <div className="logo-reply" style={{ 
                      flexShrink: 0,
                      width: '20px',
                      height: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0',
                      padding: '0'
                    }}>
                      <Image
                        src="/assets/mpk.png"
                        alt="MPK"
                        width={20}
                        height={20}
                        style={{
                          borderRadius: '50%',
                          objectFit: "cover",
                          margin: '0',
                          padding: '0'
                        }} 
                      />
                    </div>
                    <strong style={{ 
                      fontSize: '0.9rem',
                      flexShrink: 0,
                      margin: '0 0 0 0.25rem',
                      padding: '0'
                    }}>MPK:</strong>
                  </div>
                  
                  {/* Reply text as proper paragraph */}
                  <div style={{
                    width: '100%',
                    maxWidth: '100%',
                    boxSizing: 'border-box',
                    paddingRight: '0.5rem'
                  }}>
                    <p style={{
                      fontSize: '0.9rem',
                      lineHeight: '1.5',
                      margin: '0 0 0.75rem 0',
                      padding: '0',
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                      wordBreak: 'break-word',
                      whiteSpace: 'normal',
                      maxWidth: '100%',
                      boxSizing: 'border-box'
                    }}>
                      {reply}
                    </p>
                    
                    {comment.ps && (
                      <p className="ps-comment" style={{
                        fontSize: '0.8rem',
                        fontStyle: 'italic',
                        color: '#666',
                        margin: '0',
                        padding: '0',
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        wordBreak: 'break-word',
                        whiteSpace: 'normal',
                        maxWidth: '100%',
                        boxSizing: 'border-box'
                      }}>
                        P.S. {comment.ps}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))
        )}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .comment-section {
            padding: 0.75rem !important;
          }
          
          .comment-box {
            padding: 0.5rem !important;
            margin-bottom: 1rem !important;
          }
          
          .reply-container {
            margin-left: 0.5rem !important;
            padding-left: 0.5rem !important;
          }
          
          h3 {
            font-size: 1.1rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .comment-section {
            padding: 0.5rem !important;
          }
          
          .comment-box {
            padding: 0.5rem !important;
          }
          
          .reply-container {
            margin-left: 0.5rem !important;
            padding-left: 0.5rem !important;
          }
          
          .reply-container p {
            font-size: 0.85rem !important;
            padding-right: 0.25rem !important;
          }
          
          .ps-comment {
            font-size: 0.75rem !important;
          }
        }
      `}</style>
    </div>
  );
}
