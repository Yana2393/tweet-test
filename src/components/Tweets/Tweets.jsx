import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets } from "../../redux/oprations";
import { getTweets } from "../../redux/selectors";
import { TweetCard } from "../TweetCard/TweetCard";
import { Link, useParams } from "react-router-dom";
import css from './Tweets.module.css';
import Loader from "../Loader/Loader";

export const Tweets = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [loadedTweets, setLoadedTweets] = useState(3);

  useEffect(() => {
    dispatch(fetchTweets(id, loadedTweets));
  }, [dispatch, id, loadedTweets]);

  const { tweets, isLoading } = useSelector(getTweets);

  const handleLoadMore = () => {
    const newLoadedTweets = loadedTweets + 3;
    setLoadedTweets(newLoadedTweets);
    dispatch(fetchTweets(id, newLoadedTweets));
  };

  return (
    <div className={css.tweetCard}>
      <Link className={css.tweetBackBtn} to="/">
        back
      </Link>
      <ul className={css.tweetList}>
        {tweets.slice(0, loadedTweets).map((tweet) => (
          <TweetCard key={tweet.id} tweet={tweet} />
        ))}
      </ul>
      {isLoading ? (
        <Loader />
      ) : (
        loadedTweets < tweets.length && (
          <button className={css.loadMoreBtn} onClick={handleLoadMore}>
            Load More
          </button>
        )
      )}
    </div>
  );
};
