import PropTypes from 'prop-types';

export default function Input(props) {
  return (
    <input
      className='border-2 border-gray-200 rounded-lg px-3 py-1 outline-gray-400'
      type={props.name}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};