import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import Review from '../../../components/Review';
import { stateDateToDisplay } from '../../../util';

const MilestoneReview = ({
  index,
  item: { endDate, milestone },
  expand,
  onDeleteClick
}) => {
  const formattedDate = useMemo(() => stateDateToDisplay(endDate), [endDate]);

  return (
    <Review
      heading={`${index + 1}. ${milestone}`}
      headingLevel={4}
      onDeleteClick={onDeleteClick}
      onEditClick={expand}
    >
      <p className="ds-u-margin-top--2">
        <strong>Planned end date:</strong> {formattedDate}
      </p>
    </Review>
  );
};

MilestoneReview.propTypes = {
  expand: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  item: PropTypes.shape({
    endDate: PropTypes.string.isRequired,
    milestone: PropTypes.string.isRequired
  }).isRequired,
  onDeleteClick: PropTypes.func
};

MilestoneReview.defaultProps = {
  onDeleteClick: null
};

export default MilestoneReview;
