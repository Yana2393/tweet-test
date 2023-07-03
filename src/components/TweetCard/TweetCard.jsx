import css from './TweetCard.module.css'

export const TweetCard = ({ tweet }) => {

  return (
        <li className={css.tweetItem}>
          <p className={css.tweetTxt}>{tweet.text}</p>
          <p className={css.tweetTxtDate}>{tweet.createdAt}</p>
        </li>
  );
};