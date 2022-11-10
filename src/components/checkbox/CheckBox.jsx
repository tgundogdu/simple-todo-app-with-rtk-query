import "./checkbox.scss";

const CheckBox = ({ status, onChange }) => {
  return (
    <label className="v-checkbox">
      <input type="checkbox" checked={status} onChange={onChange} />
      <span className="v-mark"></span>
    </label>
  );
};

export default CheckBox;
