import PropTypes from "prop-types";
function Alert(props) {

    const {status,message,show,color} = props;
    const bgcolor = `bg-${color}-500`;
  return (
    <>
    <div className={`z-20 fixed right-1/2 top-1 flex  rounded-lg p-4 mb-4 text-sm text-white  transform translate-x-1/2 ${show} ${bgcolor}`} role="alert">
            {status && message && <div><span className="font-medium">{status}! </span> {message}</div>}
    </div>
    </>
    
  );
}

export default Alert

Alert.propTypes = {
    status: PropTypes.string,
    message: PropTypes.string,
    show: PropTypes.string,
    color: PropTypes.string,
  };
  