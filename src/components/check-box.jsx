export const CheckBox = ({ label, checked = false, onChange }) => {
  return (
    <label className="checkbox">
      <span className="checkbox-label">{label}</span>
      <input type="checkbox" checked={checked} onChange={onChange} />
    </label>
  );
};
