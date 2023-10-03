import PropTypes from "prop-types";
function Alert(props) {

    const {status,message,show,color} = props;
  return (
    <>
    <div className={`${show} z-20 fixed right-1/2 top-1 flex bg-${color}-100 rounded-lg p-4 mb-4 text-sm text-${color}-700 transform translate-x-1/2`} role="alert">
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
  