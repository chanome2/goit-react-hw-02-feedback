import PropTypes from "prop-types";
import css from "./Statistics.module.css";

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positiveFeedback,
}) => {
    return (
        <div>
            <p className={css.label}>Good❤️:&nbsp;
            <span className={css.value}>{good}</span>
            </p>

            <p className={css.label}>Neutral🤐:&nbsp;
            <span className={css.value}>{neutral}</span>
            </p>

            <p className={css.label}>Bad👿:&nbsp;
            <span className={css.value}>{bad}</span>
            </p>

            <p className={css.label}>Total:&nbsp;
            <span className={css.value}>{total}</span>
            </p>

            <p className={css.label}>Positive Feedback:&nbsp;
            <span className={css.value}>{positiveFeedback}%</span>
            </p>
        </div>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
};