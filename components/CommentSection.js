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
      <div className="w-full max-w-4xl mx-auto p-4">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Comment Section</h3>
        <p className="text-gray-600">Memuat komentar...</p>
      </div>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h3 className="text-xl font-bold mb-6 text-gray-800">Comment Section</h3>
      <div className="space-y-6">
        {(comments ?? []).length === 0 ? (
          <p className="text-gray-600 text-center py-8">Belum ada komentar</p>
        ) : (
          (comments ?? []).map((comment, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
              {/* Main Comment */}
              <div className="flex gap-3 sm:gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/assets/radupat.png"
                    alt="Radupat"
                    width={40}
                    height={40}
                    className="rounded-full object-cover w-8 h-8 sm:w-10 sm:h-10"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm sm:text-base">
                    <span className="font-semibold text-gray-900">Radupat:</span>
                    <span className="ml-2 text-gray-700 break-words leading-relaxed">{comment.aspirasi}</span>
                  </div>
                </div>
              </div>

              {/* Replies */}
              {(comment.respon ?? []).map((reply, replyIndex) => (
                <div key={replyIndex} className="ml-4 sm:ml-6 mt-4">
                  <div className="flex gap-2 sm:gap-3 items-start">
                    {/* Arrow */}
                    <div className="flex-shrink-0 mt-1">
                      <Image
                        src="/assets/arrow.png"
                        alt="Arrow"
                        width={20}
                        height={20}
                        className="object-contain w-4 h-4 sm:w-5 sm:h-5"
                      />
                    </div>

                    {/* MPK Avatar */}
                    <div className="flex-shrink-0">
                      <Image
                        src="/assets/mpk.png"
                        alt="MPK"
                        width={32}
                        height={32}
                        className="rounded-full object-cover w-7 h-7 sm:w-8 sm:h-8"
                      />
                    </div>

                    {/* Reply Content */}
                    <div className="flex-1 min-w-0">
                      <div className="text-sm sm:text-base">
                        <span className="font-semibold text-blue-600">MPK:</span>
                        <span className="ml-2 text-gray-700 break-words leading-relaxed">{reply}</span>
                      </div>

                      {/* P.S. Comment */}
                      {comment.ps && replyIndex === (comment.respon ?? []).length - 1 && (
                        <div className="mt-2 text-xs sm:text-sm text-gray-500 italic break-words">
                          P.S. {comment.ps}
                        </div>
                      )}
                    </div>
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
