"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function CommentSection() {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch("/api/comments")
        const data = await response.json()
        setComments(data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching comments:", error)
        setLoading(false)
      }
    }

    fetchComments()
    const interval = setInterval(fetchComments, 5000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="w-full p-4 sm:p-6 bg-background">
        <h3 className="text-lg font-semibold mb-4 text-foreground">Comment Section</h3>
        <p className="text-muted-foreground">Memuat komentar...</p>
      </div>
    )
  }

  return (
    <div className="w-full p-4 sm:p-6 bg-background">
      <h3 className="text-lg font-semibold mb-6 text-foreground">Comment Section</h3>
      <div id="comments" className="space-y-4">
        {(comments ?? []).length === 0 ? (
          <p className="text-muted-foreground">Belum ada komentar</p>
        ) : (
          (comments ?? []).map((comment, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-4 sm:p-6 shadow-sm">
              <div className="flex gap-3 sm:gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/assets/radupat.png"
                    alt="Radupat"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm sm:text-base text-card-foreground">
                    <strong className="text-primary">Radupat:</strong> {comment.aspirasi}
                  </div>
                </div>
              </div>

              {(comment.respon ?? []).map((reply, replyIndex) => (
                <div key={replyIndex} className="ml-4 sm:ml-8 mt-4 flex gap-2 sm:gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Image
                      src="/assets/arrow.png"
                      alt="Arrow"
                      width={20}
                      height={20}
                      className="object-contain opacity-60"
                    />
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src="/assets/mpk.png"
                      alt="MPK"
                      width={32}
                      height={32}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm sm:text-base text-card-foreground mb-2">
                      <strong className="text-primary">MPK:</strong> {reply}
                    </div>

                    {comment.ps && (
                      <div className="text-xs sm:text-sm text-muted-foreground italic">P.S. {comment.ps}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  )
}

