import { BiSolidStarHalf, BiSolidStar, BiStar } from "react-icons/bi";
import PropTypes from "prop-types";
function Rating(props) {
  const { rating } = props;
  const sz = 20;
  let ldigit = rating % 10;
  let star = parseInt(rating / 10);

  if (ldigit > 5) {
    star++;
    ldigit = 0;
  } else {
    if (ldigit != 0) {
      ldigit = 1;
    }
  }

  let c = 5 - star - ldigit;
  const stars = Array.from({ length: star });
  const halfstar = Array.from({ length: ldigit });
  const nostars = Array.from({ length: c });


  return (
    <>
      <div className="flex gap-1">
        {stars.map((_, index) => (
          <BiSolidStar key={index} size={sz} className="text-[#FFD700]" />
        ))}
        {halfstar.map((_, index) => (
          <BiSolidStarHalf key={index} size={sz} className="text-[#FFD700]" />
        ))}
        {nostars.map((_, index) => (
          <BiStar key={index} size={sz} className="text-[#FFD700]" />
        ))}
      </div>
    </>
  );
}

export default Rating;

Rating.propTypes = {
  rating: PropTypes.number,
};
