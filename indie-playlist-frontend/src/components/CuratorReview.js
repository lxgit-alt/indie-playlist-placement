import React from 'react';
import './CuratorReview.css';

const CuratorReview = () => {
  // Example reviews data
  const reviews = [
    {
      id: 1,
      curatorName: 'Curator One',
      review: 'Your track has great potential! Consider focusing on your hook for better engagement.',
    },
    {
      id: 2,
      curatorName: 'Curator Two',
      review: 'Excellent sound quality and originality. Keep up the good work!',
    },
  ];

  return (
    <section className="curator-review">
      <div className="container">
        <h2>Curator Reviews</h2>
        <div className="reviews-list">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <h3>{review.curatorName}</h3>
              <p>{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratorReview;
