import PropTypes from 'prop-types';
export default function Button(props) {
    console.log(props.disabled);
  return (
    <button
      className={`w-full bg-blue-400 rounded-lg text-white font-semibold py-2 ${
        props.disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.isLoading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
          <span className="ml-2">Cargando...</span>
        </div>
      ) : (
        'Iniciar sesión'
      )}
    </button>
  )
}

Button.propTypes = {
    disabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };